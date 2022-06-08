import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputFilterByName = () => {
  const { changeFilterName } = useContext(StarWarsContext);
  const [planetName, setPlanetName] = useState('');

  useEffect(() => {
    changeFilterName(planetName);
  }, [planetName, changeFilterName]);

  return (
    <div>
      <label htmlFor="filterByName">
        Filtro por Nome:
        <input
          data-testid="name-filter"
          type="text"
          name="planetName"
          id="filterByName"
          value={ planetName }
          onChange={ ({ target: { value } }) => setPlanetName(value.toLowerCase()) }
        />
      </label>
    </div>
  );
};

export default InputFilterByName;
