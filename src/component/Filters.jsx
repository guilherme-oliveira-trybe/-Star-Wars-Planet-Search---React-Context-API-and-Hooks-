import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import styles from './Filters.module.css';

const Filters = () => {
  const { filterByNumericValues, deleteFilter } = useContext(StarWarsContext);

  return (
    <div className={ styles.container }>
      {
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
      }
    </div>
  );
};

export default Filters;
