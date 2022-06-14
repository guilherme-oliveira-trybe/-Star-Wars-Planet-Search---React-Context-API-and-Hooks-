import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import styles from './InputFilterByName.module.css';

const InputFilterByName = () => {
  const { changeFilterName } = useContext(StarWarsContext);
  const [planetName, setPlanetName] = useState('');

  useEffect(() => {
    changeFilterName(planetName);
  }, [planetName, changeFilterName]);

  return (
    <div className={ styles.container }>
      <input
        data-testid="name-filter"
        type="text"
        name="planetName"
        id="filterByName"
        value={ planetName }
        onChange={ ({ target: { value } }) => setPlanetName(value.toLowerCase()) }
        placeholder="Digite o nome do Planeta"
      />
    </div>
  );
};

export default InputFilterByName;
