import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputFilterByNumber = () => {
  // const INITIAL_STATE = {
  //   population: false,
  //   orbital_period: false,
  //   diameter: false,
  //   rotation_period: false,
  //   surface_water: false,
  // };

  const { changeFilterNumericValues, filterType } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [inputNumber, setInputNumber] = useState(0);
  // const [filterType, setFilterType] = useState(INITIAL_STATE);

  const onClick = () => {
    changeFilterNumericValues({
      column,
      operator,
      inputNumber,
    });
    // setFilterType({
    //   ...filterType,
    //   [column]: true,
    // });
  };

  return (
    <div>
      <label htmlFor="filter-column">
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
      <label htmlFor="filter-operator">
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
