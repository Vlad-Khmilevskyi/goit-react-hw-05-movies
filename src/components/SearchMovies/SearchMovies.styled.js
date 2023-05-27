import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`  
  margin-right: 10px;
  padding: 10px;
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  width: 280px;  
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: rgb(211 107 107);;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  padding: 10px
`;