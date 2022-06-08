import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputFilterByName = () => {
  const { changeFilterName } = useContext(StarWarsContext);
  const [planetName, setPlanetName] = useState('');

  const onChange = ({ target: { value } }) => {
    setPlanetName(value);
    if (planetName.length > 0) {
      changeFilterName(planetName);
    }
  };

  return (
    <label htmlFor="filterByName">
      Filtro por Nome:
      <input
        data-testid="name-filter"
        type="text"
        name="planetName"
        id="filterByName"
        value={ planetName }
        onChange={ onChange }
      />
    </label>

  );
};

export default InputFilterByName;
