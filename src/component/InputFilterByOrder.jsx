import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputFilterByOrder = () => {
  const { changeFilterOrder } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [order, setOrder] = useState('');

  const onClick = () => {
    changeFilterOrder({
      column,
      order,
    });
  };

  return (
    <div>
      <label htmlFor="filter-column">
        Coluna
        <select
          data-testid="column-sort"
          id="filter-column"
          value={ column }
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="asc-order">
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          id="asc-order"
          name="order-type"
          value="ASC"
          onChange={ ({ target: { value } }) => setOrder(value) }
        />
        Ascendente
      </label>
      <label htmlFor="dsc-order">
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          id="dsc-order"
          name="order-type"
          value="DSC"
          onChange={ ({ target: { value } }) => setOrder(value) }
        />
        Descendente
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ onClick }
      >
        Ordenar

      </button>
    </div>

  );
};

export default InputFilterByOrder;
