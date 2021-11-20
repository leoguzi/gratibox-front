import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import {
  TitleContainer,
  ContentContainer,
  SmallButton,
  SignatureInfoCard,
} from '../common/commonStyles';
import { colors } from '../globalStyles';
import formImage from '../assets/image03.jpg';

export default function SignatureForm() {
  const navigate = useNavigate();
  const [warning, setWarning] = useState(false);
  const [formFields, setFormFields] = useState({
    signatureType: 'weekly',
    deliveryDay: 'monday',
    tea: false,
    incense: false,
    organic_products: false,
  });

  const { user, setSignatureInfo } = useContext(UserContext);

  useEffect(() => {
    setSignatureInfo({ ...formFields, user: user.token });
  }, [formFields]);

  function handleSubmit() {
    if (formFields.tea || formFields.organic_products || formFields.incense) {
      navigate('/address');
    }
    setWarning(true);
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
          <StyledSignatureForm>
            <select
              value={formFields.signatureType}
              onChange={(e) => {
                setFormFields({
                  ...formFields,
                  signatureType: e.target.value,
                  deliveryDay:
                    e.target.value === 'monthly' ? 'day 01' : 'monday',
                });
              }}
            >
              <option value='weekly'>Semanal</option>
              <option value='monthly'>Mensal</option>
            </select>

            {formFields.signatureType === 'monthly' ? (
              <select
                value={formFields.deliveryDay}
                onChange={(e) =>
                  setFormFields({ ...formFields, deliveryDay: e.target.value })
                }
              >
                <option value='day 01'>Todo dia 01</option>
                <option value='day 10'>Todo dia 10</option>
                <option value='day 20'>Todo dia 20</option>
              </select>
            ) : (
              <select
                value={formFields.deliveryDay}
                onChange={(e) =>
                  setFormFields({ ...formFields, deliveryDay: e.target.value })
                }
              >
                <option value='monday'>Toda segunda-feira</option>
                <option value='wednesday'>Toda quarta-feira</option>
                <option value='friday'>Toda sexta-feira</option>
              </select>
            )}
            <CheckBoxContainer>
              <h1>Quero receber</h1>
              <div>
                <label>
                  <input
                    checked={formFields.tea}
                    type='checkbox'
                    onChange={() => {
                      setFormFields({
                        ...formFields,
                        tea: !formFields.tea,
                      });
                      setWarning(false);
                    }}
                  />
                  Chás
                </label>
                <label>
                  <input
                    checked={formFields.incense}
                    type='checkbox'
                    onChange={() => {
                      setFormFields({
                        ...formFields,
                        incense: !formFields.incense,
                      });
                      setWarning(false);
                    }}
                  />
                  Incensos
                </label>
                <label>
                  <input
                    checked={formFields.organic_products}
                    type='checkbox'
                    onChange={() => {
                      setFormFields({
                        ...formFields,
                        organic_products: !formFields.organic_products,
                      });
                      setWarning(false);
                    }}
                  />
                  Produtos Organicos
                </label>
              </div>
              {warning && <Warning>Selecione pelo menos um item!</Warning>}
            </CheckBoxContainer>
          </StyledSignatureForm>
        </SignatureInfoCard>
        <SmallButton onClick={() => handleSubmit()}>Próximo</SmallButton>
      </ContentContainer>
    </>
  );
}

const StyledSignatureForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  select {
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
  option {
    font-weight: bold;
  }
`;

const CheckBoxContainer = styled.div`
  padding: 10px;
  background-color: ${colors.color2};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  h1 {
    margin: 5px 0;
    font-size: 18px;
    font-weight: bold;
    color: ${colors.color0};
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  label {
    padding: 5px;
    font-size: 18px;
    margin-bottom: 5px;
    color: ${colors.color0};
  }

  input[type='checkbox'] {
    transform: scale(1.5);
    margin-right: 10px;
  }
`;

const Warning = styled.span`
  color: ${colors.color8};
  margin-bottom: 5px;
  align-self: center;
`;
