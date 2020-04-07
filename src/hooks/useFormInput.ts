import { useState } from "react";

function useFormInput(initialValue: any, placeholder?: string) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return { value, placeholder, onChange: handleChange };
}

export default useFormInput;
