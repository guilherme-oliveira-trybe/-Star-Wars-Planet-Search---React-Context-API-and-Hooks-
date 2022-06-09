import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { filterByNumericValues, deleteFilter } = useContext(StarWarsContext);

  return (
    filterByNumericValues.map(({ column, operator, inputNumber }, index) => (
      <div key={ `${column}-${index}` } data-testid="filter">
        <span>
          {`${column} ${operator} ${inputNumber}`}
        </span>
        <button
          type="button"
          onClick={ () => deleteFilter(index, column) }
        >
          X

        </button>
      </div>
    ))
  );
};

export default Filters;
