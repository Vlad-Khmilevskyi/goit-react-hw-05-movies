import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 20px 50px;
  color: rgb(0, 0, 0);
  height: 100%;
  background-color: #a4a4ab;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 40px 0px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: black;
  cursor: pointer;
  padding: 5px;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active,
  &:hover,
  &:focus {
    color: rgb(255 255 255);
  }
`;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

export const LoadingDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Dot = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #1c85ff;
  animation: ${bounce} 1s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};
`;