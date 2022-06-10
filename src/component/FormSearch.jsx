import React from 'react';
import InputFilterByName from './InputFilterByName';
import InputFilterByNumber from './InputFilterByNumber';
import ButtonDeleteAllFilters from './ButtonDeleteAllFilters';
import InputFilterByOrder from './InputFilterByOrder';

const FormSearch = () => (
  <form>
    Projeto Star Wars - Trybe
    <hr />
    <InputFilterByName />
    <hr />
    <InputFilterByNumber />
    <hr />
    <InputFilterByOrder />
    <ButtonDeleteAllFilters />
  </form>
);

export default FormSearch;
