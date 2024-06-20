import { useState } from "react";
import { object, string } from "yup";

// Using Yup to validate the form, with its easy to define rules.
const formSchema = object({
  // Email must be a valid email
  email: string().email().required(),
  // Password must be more than 8 characters
  password: string().required().min(8),
  // A colour must be selected
  colour: string().required(),
  // At least two animals must be selected
  animals: object().test((value) => {
    return Object.values(value || {}).filter(Boolean).length >= 2;
  }),
  // If Tiger is one of the chosen Animals then Type of tiger is required to be a non-empty string
  tiger_type: string().when("animals", {
    is: (animals) => animals && animals.tiger,
    then: (schema) => schema.required(),
  }),
});

// Custom hook to manage the form state and validation
const useForm = () => {
  const [formFields, setFormFields] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    setFormFields((_formFields) => {
      return { ..._formFields, [e.target.name]: e.target.value };
    });
  };

  const handleAnimalChange = (e) => {
    setFormFields((_formFields) => {
      const newAnimals = _formFields.animals || {};
      newAnimals[e.target.value] = e.target.checked;

      return { ..._formFields, animals: newAnimals };
    });
  };

  // Validate the form
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const _formErrors = {};
    await formSchema
      .validate(formFields, { abortEarly: false })
      .catch((err) => {
        console.log(err);
        (err.inner || []).forEach((error) => {
          _formErrors[error.path] = error.message;
        });
        return true;
      });

    setFormErrors(_formErrors);
  };

  return {
    formFields,
    formErrors,
    handleInputChange,
    handleAnimalChange,
    handleSubmitForm,
  };
};

export default useForm;
