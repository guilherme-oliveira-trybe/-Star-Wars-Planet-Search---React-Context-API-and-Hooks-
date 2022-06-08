import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputFilterByNumber = () => {
  const { changeFilterNumericValues } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [inputNumber, setInputNumber] = useState(0);

  const onChangeColumn = ({ target: { value } }) => {
    setColumn(value);
  };

  const onChangeOperator = ({ target: { value } }) => {
    setOperator(value);
  };

  const onChangeInputNumber = ({ target: { value } }) => {
    setInputNumber(value);
  };

  const onClick = () => {
    changeFilterNumericValues({
      column,
      operator,
      inputNumber,
    });
  };

  return (
    <div>
      <label htmlFor="filter-column">
        Coluna
        <select
          data-testid="column-filter"
          id="filter-column"
          value={ column }
          onChange={ onChangeColumn }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="filter-operator">
        Operador
        <select
          data-testid="comparison-filter"
          id="filter-operator"
          value={ operator }
          onChange={ onChangeOperator }
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
        onChange={ onChangeInputNumber }
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
