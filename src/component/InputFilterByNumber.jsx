import React from 'react';

const InputFilterByNumber = () => (
  <div>
    <label htmlFor="filter-column">
      Coluna
      <select
        data-testid="column-filter"
        id="filter-column"
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
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
    </label>
    <input
      data-testid="value-filter"
      type="number"
    />
    <button
      data-testid="button-filter"
      type="button"
    >
      Filtrar

    </button>
  </div>
);

export default InputFilterByNumber;
