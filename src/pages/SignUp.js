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

export default function SignUp() {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });
  const [invalidFormFields, setInvalidFormFields] = useState({
    name: false,
    email: false,
    password: false,
    passwordCheck: false,
  });
  function handleSignUp(e) {
    e.preventDefault();
    if (formFields.password !== formFields.passwordCheck) {
      setInvalidFormFields({ ...invalidFormFields, passwordCheck: true });
    }
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
          required
          type='password'
          placeholder='Confirmar senha'
          invalid={invalidFormFields.passwordCheck}
          onChange={(e) => {
            setFormFields({ ...formFields, passwordCheck: e.target.value });
            setInvalidFormFields({
              ...invalidFormFields,
              passwordCheck: false,
            });
          }}
        />
        {invalidFormFields.passwordCheck && (
          <FormErrorMessage>Senha não confere!</FormErrorMessage>
        )}
        <ButtoContainer>
          <BigButton type='submit'>
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
