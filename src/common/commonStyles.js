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
  padding: 10px 30px;
  margin-bottom: 20px;
  background-color: ${colors.color0};
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  color: ${colors.color4};
`;

const StyledLink = styled(Link)`
  color: ${colors.color4};
  font-weight: bold;
  font-size: 18px;
`;

export { TitleContainer, SmallButton, StyledLink };
