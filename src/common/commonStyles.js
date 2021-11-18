import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../globalStyles';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  padding: 10px 40px;
  height: 25vh;
  h1,
  h2 {
    text-align: center;
    font-size: 28px;
    color: ${colors.color4};
  }

  h2 {
    font-size: 18px;
  }
`;

const SmallButton = styled.button`
  height: 40px;
  padding: 0 30px;
  margin-bottom: 20px;
  background-color: ${colors.color0};
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  color: ${colors.color4};
`;

const BigButton = styled.button`
  height: 56px;
  width: 100%;
  padding: 0 30px;
  margin-bottom: 20px;
  background-color: ${colors.color6};
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 36px;
  color: ${colors.color4};
`;

const StyledLink = styled(Link)`
  color: ${colors.color4};
  font-weight: bold;
  font-size: 18px;
`;

const StyledForm = styled.form`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  border: ${(props) => (props.invalid ? `2px solid ${colors.color8}` : 'none')};
  border-radius: 5px;
  margin-bottom: 7px;
  padding-left: 10px;
  font-size: 24px;
  &:focus {
    outline: 2px solid ${colors.color7};
  }
`;

const FormErrorMessage = styled.span`
  color: ${colors.color4};
  margin-bottom: 5px;
`;

export {
  TitleContainer,
  SmallButton,
  BigButton,
  StyledLink,
  StyledForm,
  StyledInput,
  FormErrorMessage,
};
