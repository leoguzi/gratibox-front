import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { colors } from '../globalStyles';
import {
  TitleContainer,
  SignatureInfoCard,
  SmallButton,
  ContentContainer,
} from '../common/commonStyles';
import formImage from '../assets/image03.jpg';
import UserContext from '../contexts/UserContext';

export default function AddressForm() {
  const states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];
  const { signatureInfo, setSignatureInfo, user } = useContext(UserContext);
  const [formFields, setFormFields] = useState({
    name: user.name,
    address: '',
    cep: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    setSignatureInfo({ ...signatureInfo, ...formFields });
  }, [formFields]);

  function handleSubmit() {
    console.log(signatureInfo);
  }
  return (
    <>
      <TitleContainer>
        <h1>Bom te ver por aqui, @user</h1>
        <h2>&quot;Agradecer é a arte de atrair coisas boas&quot;</h2>
      </TitleContainer>
      <ContentContainer>
        <SignatureInfoCard>
          <img src={formImage} alt='Mulher meditando.' />
          <StyledAddressForm>
            <StyledAddressInput
              required
              value={formFields.name}
              type='text'
              placeholder='Nome'
              onChange={(e) =>
                setFormFields({ ...formFields, name: e.target.value })
              }
            />
            <StyledAddressInput
              required
              value={formFields.address}
              type='text'
              placeholder='Endereço de entrega'
              onChange={(e) =>
                setFormFields({ ...formFields, address: e.target.value })
              }
            />
            <StyledAddressInput
              required
              value={formFields.cep}
              type='text'
              placeholder='CEP'
              onChange={(e) =>
                setFormFields({ ...formFields, cep: e.target.value })
              }
            />
            <div>
              <StyledAddressInput
                required
                value={formFields.city}
                type='text'
                placeholder='Cidade'
                onChange={(e) =>
                  setFormFields({ ...formFields, city: e.target.value })
                }
              />
              <select
                value={formFields.state}
                onChange={(e) =>
                  setFormFields({ ...formFields, state: e.target.value })
                }
              >
                {states.map((state, index) => (
                  <option key={index}>{state}</option>
                ))}
              </select>
            </div>
          </StyledAddressForm>
        </SignatureInfoCard>
        <SmallButton onClick={() => handleSubmit()}>Finalizar</SmallButton>
      </ContentContainer>
    </>
  );
}

const StyledAddressForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  div {
    display: flex;
    justify-content: space-between;
    input {
      width: 70%;
    }
  }
  select {
    width: 28%;
    padding: 0 10px;
    height: 45px;
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: bold;
    color: ${colors.color0};
    background-color: ${colors.color2};
  }
`;

const StyledAddressInput = styled.input`
  width: 100%;
  height: 45px;
  border: ${(props) => (props.invalid ? `2px solid ${colors.color8}` : 'none')};
  border-radius: 5px;
  margin-bottom: 7px;
  padding-left: 10px;
  font-size: 20px;
  background-color: ${colors.color2};
  &:focus {
    outline: 2px solid ${colors.color0};
  }
`;
