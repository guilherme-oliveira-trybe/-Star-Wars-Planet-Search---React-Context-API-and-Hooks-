import React from 'react';
import InputFilterByName from './InputFilterByName';
import InputFilterByNumber from './InputFilterByNumber';
import ButtonDeleteAllFilters from './ButtonDeleteAllFilters';
import InputFilterByOrder from './InputFilterByOrder';
import styles from './FormSearch.module.css';

const FormSearch = () => (
  <form className={ styles.container }>
    <header>
      Star Wars Search Planets
      <InputFilterByName />
    </header>
    <main>
      <InputFilterByNumber />
      <InputFilterByOrder />
      <ButtonDeleteAllFilters />
    </main>
  </form>
);

export default FormSearch;
