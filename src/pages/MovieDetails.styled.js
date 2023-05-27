import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.button`
  border-radius: 4px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border: 0px;
  background-color: rgb(211, 107, 107);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  outline: none;
  padding: 10px;
`;