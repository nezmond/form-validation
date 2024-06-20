import React from "react";
import {
  CheckBoxInput,
  PasswordInput,
  SelectInput,
  SubmitInput,
  TextInput,
} from "../form-input";
import {
  StyledForm,
  StyledInputLabel,
  StyledFieldset,
  StyledRow,
  StyledCheckBoxLabel,
} from "./styles";
import useForm from "./use-form";

// This could be broken down into further components but for the
// sake of time I've kept it pretty simple.
const Form = ({ animalOptions, colorOptions }) => {
  const {
    handleAnimalChange,
    handleInputChange,
    handleSubmitForm,
    formErrors,
  } = useForm();

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <h1>Fill out this awesome form</h1>
      <StyledFieldset>
        <h3>Your details</h3>
        <StyledRow>
          <StyledInputLabel error={formErrors.email} htmlFor="email">
            Email
          </StyledInputLabel>
          <TextInput
            error={formErrors.email}
            id="email"
            name="email"
            onChange={handleInputChange}
          />
        </StyledRow>
        <StyledRow>
          <StyledInputLabel error={formErrors.password} htmlFor="password">
            Password
          </StyledInputLabel>
          <PasswordInput
            id="password"
            name="password"
            onChange={handleInputChange}
            error={formErrors.password}
          />
        </StyledRow>
      </StyledFieldset>

      <StyledFieldset hasBorder>
        <h3>Your animal</h3>
        <StyledRow>
          <StyledInputLabel error={formErrors.colour} htmlFor="colour">
            Colour
          </StyledInputLabel>
          <SelectInput
            error={formErrors.colour}
            name="colour"
            id="colour"
            onChange={handleInputChange}
          >
            {colorOptions.map((colour) => (
              <option key={colour.value} value={colour.value}>
                {colour.label}
              </option>
            ))}
          </SelectInput>
        </StyledRow>

        <StyledRow>
          <StyledInputLabel error={formErrors.animals}>Animal</StyledInputLabel>
          {animalOptions.map((animal, index) => (
            <React.Fragment key={animal.value}>
              <CheckBoxInput
                name="animal"
                value={animal.value}
                id={animal.value}
                onChange={handleAnimalChange}
                style={{ marginLeft: index === 0 && 0 }}
              />
              <StyledCheckBoxLabel htmlFor={animal.value}>
                {animal.label}
              </StyledCheckBoxLabel>
            </React.Fragment>
          ))}
        </StyledRow>

        <StyledRow>
          <StyledInputLabel htmlFor="tiger_type" error={formErrors.tiger_type}>
            Type of tiger
          </StyledInputLabel>
          <TextInput
            error={formErrors.tiger_type}
            name="tiger_type"
            id="tiger_type"
            onChange={handleInputChange}
          />
        </StyledRow>
      </StyledFieldset>

      <StyledFieldset hasBorder>
        <StyledRow>
          <SubmitInput type="submit" value="Create account" />
        </StyledRow>
      </StyledFieldset>
    </StyledForm>
  );
};

Form.displayName = "Form";

export default Form;
