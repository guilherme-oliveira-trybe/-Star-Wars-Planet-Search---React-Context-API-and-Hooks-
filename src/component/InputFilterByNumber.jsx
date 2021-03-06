import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import styles from './InputFilterByNumber.module.css';

const InputFilterByNumber = () => {
  const { changeFilterNumericValues, filterType } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [inputNumber, setInputNumber] = useState(0);

  const onClick = () => {
    changeFilterNumericValues({
      column,
      operator,
      inputNumber,
    });
  };

  return (
    <div className={ styles.container }>
      <label htmlFor="filter-column" className={ styles.column }>
        Coluna
        <select
          data-testid="column-filter"
          id="filter-column"
          value={ column }
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          { !filterType.population && <option>population</option>}
          { !filterType.orbital_period && <option>orbital_period</option>}
          { !filterType.diameter && <option>diameter</option>}
          { !filterType.rotation_period && <option>rotation_period</option>}
          { !filterType.surface_water && <option>surface_water</option>}
        </select>
      </label>
      <label htmlFor="filter-operator" className={ styles.operator }>
        Operador
        <select
          data-testid="comparison-filter"
          id="filter-operator"
          value={ operator }
          onChange={ ({ target: { value } }) => setOperator(value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <input
        data-testid="value-filter"
        type="number"
        value={ inputNumber }
        onChange={ ({ target: { value } }) => setInputNumber(value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ onClick }
      >
        Filtrar

      </button>
    </div>

  );
};

export default InputFilterByNumber;
