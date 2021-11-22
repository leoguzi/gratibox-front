import { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { serverLogin } from '../services/api.service';
import UserContext from '../contexts/UserContext';

import {
  TitleContainer,
  StyledLink,
  StyledForm,
  StyledInput,
  BigButton,
  FormErrorMessage,
} from '../common/commonStyles';

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState({ email: '', password: '' });
  const [disabled, setDisabled] = useState(false);
  const [invalidFormFields, setInvalidFormFields] = useState({
    email: false,
    password: false,
  });

  function login(userData) {
    setUser(userData);
    setDisabled(false);
    localStorage.setItem('userSession', JSON.stringify(userData));
    navigate('/signature');
  }

  function handleError(error) {
    const { status } = error.response;
    if (status === 404) {
      setInvalidFormFields({ invalidFormFields, email: true });
    } else if (status === 401) {
      setInvalidFormFields({ ...setInvalidFormFields, password: true });
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    serverLogin(formFields)
      .then((r) => login(r.data))
      .catch(handleError);
  }

  return (
    <>
      <TitleContainer>
        <h1>
          Bem vindo ao <strong>GratiBox</strong>
        </h1>
      </TitleContainer>
      <StyledForm type='submit' onSubmit={(e) => handleLogin(e)}>
        <StyledInput
          disabled={disabled}
          required
          type='email'
          placeholder='E-mail'
          invalid={invalidFormFields.email}
          onChange={(e) => {
            setFormFields({ ...formFields, email: e.target.value });
            setInvalidFormFields({ ...invalidFormFields, email: false });
          }}
        />
        {invalidFormFields.email && (
          <FormErrorMessage>E-mail não cadastrado!</FormErrorMessage>
        )}
        <StyledInput
          disabled={disabled}
          required
          type='password'
          placeholder='Senha'
          invalid={invalidFormFields.password}
          onChange={(e) => {
            setFormFields({ ...formFields, password: e.target.value });
            setInvalidFormFields({ ...invalidFormFields, password: false });
          }}
        />
        {invalidFormFields.password && (
          <FormErrorMessage>Senha incorreta!</FormErrorMessage>
        )}

        <ButtoContainer>
          <BigButton disabled={disabled} type='submit'>
            <span>Login</span>
          </BigButton>
          <StyledLink to='/signup'>Ainda não sou grato(a)</StyledLink>
        </ButtoContainer>
      </StyledForm>
    </>
  );
}
const ButtoContainer = styled.div`
  width: 65vw;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
