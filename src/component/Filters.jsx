import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { filterByNumericValues } = useContext(StarWarsContext);

  return (
    filterByNumericValues.map(({ column, operator, inputNumber }) => (
      <span key={ column }>
        {`${column} ${operator} ${inputNumber}`}
      </span>
    ))
  );
};

export default Filters;
