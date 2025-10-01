import { useState } from "react";

function useChallengeForm(initialValues) {
  const [form, setForm] = useState(initialValues);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, handleChange, resetForm };
}

export default useChallengeForm;