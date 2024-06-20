import styled from "styled-components";

const StyledForm = styled.form`
  background: #fff;
  padding: 1em 1.25em;
  border: solid 1px #ccc;
  border-radius: 0.25em;
`;

const StyledLabel = styled.label`
  ${({ error }) => error && ` color: red;`}
`;

const StyledInputLabel = styled(StyledLabel)`
  vertical-align: middle;
  width: 10em;
  display: inline-block;
`;

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0.5rem;
  ${({ hasBorder }) => hasBorder && "border-top: solid 1px #eee;"};
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.5em 0;
`;

const StyledCheckBoxLabel = styled(StyledLabel)``;

export {
  StyledForm,
  StyledInputLabel,
  StyledFieldset,
  StyledRow,
  StyledCheckBoxLabel,
};
