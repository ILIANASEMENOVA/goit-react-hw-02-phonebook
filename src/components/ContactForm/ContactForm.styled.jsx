import { styled } from 'styled-components';

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: #ffc0cb;
  border: 3px solid #ff69b4;
  border-radius: 4px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    color: #f08080;
    font-size: 20px;
  }
  imput {
    font: inherit;
    width: 400px;
    padding: 10px;
    margin: 0 auto;
    border-radius: 4px;
    border: 3px solid #ff69b4;
    cursor: pointer;
  }
  button {
    padding: 8px 12px;
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
    border: 3px solid #ff69b4;
    color: #f08080;
    font-size: 20px;
  }
`;

export default FormStyle;
