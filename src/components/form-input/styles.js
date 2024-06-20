import styled from "styled-components";

// There is a bit of duplication here but I've kept it separate for clarity and better seperation of concerns.

const StyledInput = styled.input`
  ${({ error }) =>
    error &&
    `
    &&& { 
        border-color: red;
        color: red;
    }
    `}
`;

const StyledTextInput = styled(StyledInput)`
  font-family: sans-serif;
  font-size: 1em;
  border-radius: 0.25em;
  -webkit-appearance: none;
  border: solid 1px #ddd;
  padding: 0.5em 0.5em;
  color: #555;
  width: 16em;

  &:focus {
    outline: none;
    border-color: #0b77db;
    box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
  }
`;

const StyledSubmitInput = styled(StyledInput)`
  font-family: sans-serif;
  font-size: 0.875em;
  border-radius: 0.25em;
  -webkit-appearance: none;
  border: solid 1px transparent;
  background: #0b77db;
  color: #fff;
  padding: 0.75em 1em;
  cursor: pointer;

  &:hover {
    background: #3c9aa7;
  }

  &:focus {
    background: #3d6eac;
  }

  &:active {
    background: #333;
    border-color: #333;
  }
`;

const StyledPasswordInput = styled(StyledInput)`
  font-family: sans-serif;
  font-size: 1em;
  border-radius: 0.25em;
  -webkit-appearance: none;
  border: solid 1px #ddd;
  padding: 0.5em 0.5em;
  color: #555;
  width: 16em;

  &:focus {
    outline: none;
    border-color: #0b77db;
    box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
  }
`;

const StyledSelectInput = styled.select`
  font-size: 1em;
  border-radius: 0.25em;
  -webkit-appearance: none;
  width: 17em;

  ${({ error }) =>
    error &&
    `
    &&& { 
        border-color: red;
        color: red;
    }
    `}
`;

const StyledCheckBoxInput = styled(StyledInput)`
  margin-left: 1em;
`;

export {
  StyledTextInput,
  StyledSubmitInput,
  StyledPasswordInput,
  StyledSelectInput,
  StyledCheckBoxInput,
};
