import { useState } from 'react';
import styled from 'styled-components';

import {
  TitleContainer,
  StyledLink,
  StyledForm,
  StyledInput,
  BigButton,
  FormErrorMessage,
} from '../common/commonStyles';

export default function Login() {
  const [formFields, setFormFields] = useState({ email: '', password: '' });
  const [invalidFormFields, setInvalidFormFields] = useState({
    email: false,
    password: false,
  });
  function handleLogin(e) {
    e.preventDefault();
    setInvalidFormFields({ ...invalidFormFields, email: true });
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
          required
          type='email'
          placeholder='E-mail'
          invalid={invalidFormFields.email}
          onChange={(e) =>
            setFormFields({ ...formFields, email: e.target.value })
          }
        />
        {invalidFormFields.email && (
          <FormErrorMessage>E-mail não cadastrado!</FormErrorMessage>
        )}
        <StyledInput
          required
          type='password'
          placeholder='Senha'
          invalid={invalidFormFields.password}
          onChange={(e) =>
            setFormFields({ ...formFields, password: e.target.value })
          }
        />
        {invalidFormFields.password && (
          <FormErrorMessage>Senha incorreta!</FormErrorMessage>
        )}

        <ButtoContainer>
          <BigButton type='submit'>
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
