import React from "react";
import {
  StyledTextInput,
  StyledPasswordInput,
  StyledSelectInput,
  StyledSubmitInput,
  StyledCheckBoxInput,
} from "./styles";

// Overkill at this stage but allows for easy extension in the future

const TextInput = ({ ...props }) => {
  return <StyledTextInput type="text" {...props} />;
};

TextInput.displayName = "TextInput";

const SubmitInput = ({ ...props }) => {
  return <StyledSubmitInput type="submit" {...props} />;
};

SubmitInput.displayName = "SubmitInput";

const PasswordInput = ({ ...props }) => {
  return <StyledPasswordInput type="password" {...props} />;
};

PasswordInput.displayName = "PasswordInput";

const CheckBoxInput = ({ ...props }) => {
  return <StyledCheckBoxInput type="checkbox" {...props} />;
};

const SelectInput = ({ ...props }) => {
  return <StyledSelectInput type="select" {...props} />;
};

CheckBoxInput.displayName = "CheckBoxInput";

export { TextInput, SubmitInput, PasswordInput, CheckBoxInput, SelectInput };
