import { useState } from 'react';

const useFormLogic = (cb) => {

  const [values, setValues] = useState({});

  const handleSubmit = (ev) => {
    if (ev) ev.preventDefault();
    if (typeof cb === 'function') cb();
  };

  const handleChange = (ev) => {
      console.log(ev);
    ev.persist();
    setValues(values => ({ ...values, [ev.target.name]: ev.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

export default useFormLogic;