import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { filterByNumericValues } = useContext(StarWarsContext);

  return (
    filterByNumericValues.map(({ column, operator, inputNumber }, index) => (
      <span key={ `${column}-${index}` }>
        {`${column} ${operator} ${inputNumber}`}
      </span>
    ))
  );
};

export default Filters;
