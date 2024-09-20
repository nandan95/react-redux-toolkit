import { useState } from 'react';

// Custom hook to manage form state and validation
const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, proceed with form submission
      console.log('Form submitted:', values);
    } else {
      setErrors(validationErrors);
    }
  };
  
  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
};

export default useForm;
