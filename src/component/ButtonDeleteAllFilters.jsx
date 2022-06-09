import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const ButtonDeleteAllFilters = () => {
  const { deleteAllFilters } = useContext(StarWarsContext);

  return (
    <div>
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
