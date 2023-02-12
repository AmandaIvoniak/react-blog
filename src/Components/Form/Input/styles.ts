import styled from "styled-components";

export const BoxField = styled.div`
  margin: 0px;
  display: flex;
  flex-wrap: wrap;

  input:focus {
    border: 1px solid #41778a !important;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #0e2a3e;
  text-transform: uppercase;
`;

export const InputField = styled.input`
  background-color: #fff;
  border: 1px solid #41778A;
  border-radius: 4px;
  height: 36px;
  font-size: 14px;
  line-height: 16px;
  color: #0e2a3e;
  font-weight: 500;
  transition: 0.1s ease-out border;
  width: 100%;
  padding: 10px 16px;
  margin: 5px 0;

  &:hover {
    border-color: #568eaf;
  }

  &:focus-visible {
    border-color: #41778a !important;
  }

  &:focus {
    border-color: #41778a;
  }

  &:disabled {
    background-color: #f2f6fa;
    border-color: #cad0d5;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #b00000;
  line-height: 16px;
  font-weight: 400;
`;
