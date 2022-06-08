import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputFilterByName = () => {
  const { changeFilterName } = useContext(StarWarsContext);
  const [planetName, setPlanetName] = useState('');

  useEffect(() => {
    changeFilterName(planetName);
  }, [planetName, changeFilterName]);

  const onChange = ({ target: { value } }) => {
    setPlanetName(value);
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
