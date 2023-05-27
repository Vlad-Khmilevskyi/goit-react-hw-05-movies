import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 40px;
`;

export const Img = styled.img`
  display: block;
  width: 200px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MovieInfo = styled.div`
`;

export const MovieName = styled.h2`
`;

export const MovieInfoText = styled.p`
`;

export const MovieInfoTextBold = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
  font-weight: bold;
`;

export const MoreInfoWrapper = styled.div`
`;

export const MoreInfoHeader = styled.h3`
`;

export const List = styled.ul`
`;

export const ListItem = styled.li`
`;

export const StyledLink = styled(Link)`
`;