import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api.service';

import {
  TitleContainer,
  StyledLink,
  StyledForm,
  StyledInput,
  BigButton,
  FormErrorMessage,
} from '../common/commonStyles';

export default function SignUp() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [invalidFormFields, setInvalidFormFields] = useState({
    name: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

  function handleError(error) {
    setDisabled(false);
    const { status } = error.response;
    if (status === 409) {
      setInvalidFormFields({ ...invalidFormFields, email: true });
    }
  }

  function handleSignUp(e) {
    setDisabled(true);
    e.preventDefault();
    if (formFields.password !== formFields.passwordConfirm) {
      setInvalidFormFields({ ...invalidFormFields, passwordConfirm: true });
      setDisabled(false);
    }
    if (formFields.name.length < 2) {
      setInvalidFormFields({ ...invalidFormFields, name: true });
      setDisabled(false);
    }
    registerUser(formFields)
      .then(() => navigate('/login'))
      .catch(handleError);
  }

  return (
    <>
      <TitleContainer>
        <h1>
          Bem vindo ao <strong>GratiBox</strong>
        </h1>
      </TitleContainer>
      <StyledForm type='submit' onSubmit={(e) => handleSignUp(e)}>
        <StyledInput
          disabled={disabled}
          required
          type='text'
          placeholder='Nome'
          invalid={invalidFormFields.name}
          onChange={(e) => {
            setFormFields({ ...formFields, name: e.target.value });
            setInvalidFormFields({ ...invalidFormFields, name: false });
          }}
        />
        {invalidFormFields.name && (
          <FormErrorMessage>Digite seu nome!</FormErrorMessage>
        )}
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
          <FormErrorMessage>E-mail já cadastrado!</FormErrorMessage>
        )}
        <StyledInput
          disabled={disabled}
          required
          type='password'
          placeholder='Senha'
          invalid={invalidFormFields.password}
          onChange={(e) => {
            setFormFields({ ...formFields, password: e.target.value });
            setInvalidFormFields({ ...invalidFormFields, senha: false });
          }}
        />
        {invalidFormFields.password && (
          <FormErrorMessage>Informe uma senha!</FormErrorMessage>
        )}
        <StyledInput
          disabled={disabled}
          required
          type='password'
          placeholder='Confirmar senha'
          invalid={invalidFormFields.passwordConfirm}
          onChange={(e) => {
            setFormFields({ ...formFields, passwordConfirm: e.target.value });
            setInvalidFormFields({
              ...invalidFormFields,
              passwordConfirm: false,
            });
          }}
        />
        {invalidFormFields.passwordConfirm && (
          <FormErrorMessage>Senha não confere!</FormErrorMessage>
        )}
        <ButtoContainer>
          <BigButton disabled={disabled} type='submit'>
            <span>Cadastrar</span>
          </BigButton>
          <StyledLink to='/login'>Já sou grato(a)</StyledLink>
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
