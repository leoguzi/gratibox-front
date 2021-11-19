import styled from 'styled-components';
import { useState } from 'react';
import {
  TitleContainer,
  ContentContainer,
  SignatureInfoCard,
  SmallButton,
} from '../common/commonStyles';
import { colors } from '../globalStyles';
import formImage from '../assets/image03.jpg';

export default function SignatureForm() {
  const [formFields, setFormFields] = useState({
    signatureType: 'weekly',
    deliveryDay: 'monday',
    tea: false,
    incense: false,
    organic_products: false,
  });
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
                    onChange={() =>
                      setFormFields({
                        ...formFields,
                        tea: !formFields.tea,
                      })
                    }
                  />
                  Chás
                </label>
                <label>
                  <input
                    checked={formFields.incense}
                    type='checkbox'
                    onChange={() =>
                      setFormFields({
                        ...formFields,
                        incense: !formFields.incense,
                      })
                    }
                  />
                  Incensos
                </label>
                <label>
                  <input
                    checked={formFields.organic_products}
                    type='checkbox'
                    onChange={() =>
                      setFormFields({
                        ...formFields,
                        organic_products: !formFields.organic_products,
                      })
                    }
                  />
                  Produtos Organicos
                </label>
              </div>
            </CheckBoxContainer>
          </StyledSignatureForm>
        </SignatureInfoCard>
        <SmallButton>Próximo</SmallButton>
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
