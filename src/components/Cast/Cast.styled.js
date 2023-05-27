import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const CastHeader = styled.h3`
  font-size: 30px;
  font-weight: 700;

  margin-bottom: 20px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 0;
`;

export const CastListItem = styled.li`
  backdrop-filter: blur(10px);
  padding: 10px;

  width: 150px;
  background-color: #fff;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 18px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 10px 0px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.03;
  }
`;

export const CastInfo = styled.div`
`;

export const CastName = styled.h3`
  margin-bottom: 10px;
`;

export const NoCastText = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  max-width: 500px;
`;

export const CastImg = styled.img`
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;