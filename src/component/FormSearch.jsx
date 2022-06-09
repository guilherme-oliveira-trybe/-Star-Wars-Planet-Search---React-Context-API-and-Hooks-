import React from 'react';
import InputFilterByName from './InputFilterByName';
import InputFilterByNumber from './InputFilterByNumber';
import ButtonDeleteAllFilters from './ButtonDeleteAllFilters';

const FormSearch = () => (
  <form>
    Projeto Star Wars - Trybe
    <hr />
    <InputFilterByName />
    <hr />
    <InputFilterByNumber />
    <ButtonDeleteAllFilters />
  </form>
);

export default FormSearch;
