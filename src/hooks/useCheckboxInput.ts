import { useState } from "react";

function useCheckboxInput() {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(!checked);
  }

  return { checked, onChange: handleChange };
}

export default useCheckboxInput;
