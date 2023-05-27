import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding-right: 50px;
  padding-left: 50px;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 900;
`;
export const StyledSectionForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const List = styled.ul`
  color: #000;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;
  text-decoration: none;

  color: rgb(0 0 0);
  cursor: pointer;
  font-weight: 600;

  &:hover,
  &:focus {
    color: #8d63df;
  }
`;