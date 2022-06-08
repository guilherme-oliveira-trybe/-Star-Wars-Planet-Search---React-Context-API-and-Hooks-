import React from 'react';
import InputFilterByName from './InputFilterByName';
import InputFilterByNumber from './InputFilterByNumber';

const FormSearch = () => (
  <form>
    Projeto Star Wars - Trybe
    <hr />
    <InputFilterByName />
    <hr />
    <InputFilterByNumber />
  </form>
);

export default FormSearch;
