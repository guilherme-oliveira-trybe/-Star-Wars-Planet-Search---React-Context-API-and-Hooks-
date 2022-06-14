import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import styles from './ButtonDeleteAllFilters.module.css';

const ButtonDeleteAllFilters = () => {
  const { deleteAllFilters } = useContext(StarWarsContext);

  return (
    <div className={ styles.container }>
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => deleteAllFilters() }
      >
        Remover Filtros

      </button>
    </div>
  );
};

export default ButtonDeleteAllFilters;
