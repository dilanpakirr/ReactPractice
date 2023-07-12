import React from "react";
import { useState } from "react";

function InputState() {
  const [form, setForm] = useState({ name: "", surname: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <input name="name" value={form.name} onChange={onChangeInput} />
      {form.name}
    </div>
  );
}

export default InputState;
