import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(urlApi).then((response) => response.json());
      const filterResults = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setData(filterResults);
      setFilterPlanets(filterResults);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const filterName = data.filter(({ name }) => name.toLowerCase()
      .includes(filterByName));

    const resultAllFilters = filterByNumericValues
      .reduce((acc, { column, operator, inputNumber }) => acc.filter((planet) => {
        switch (operator) {
        case 'maior que':
          return planet[column] > Number(inputNumber);
        case 'menor que':
          return planet[column] < Number(inputNumber);
        case 'igual a ':
          return planet[column] === Number(inputNumber);
        default:
          return true;
        }
      }), filterName);

    setFilterPlanets(resultAllFilters);
  }, [data, filterByName, filterByNumericValues]);

  const changeFilterName = (value) => {
    setFilterByName(value);
  };

  const changeFilterNumericValues = ({ column, operator, inputNumber }) => {
    const numericValues = {
      column,
      operator,
      inputNumber,
    };

    setFilterByNumericValues([
      ...filterByNumericValues,
      numericValues,
    ]);
  };

  const contexValue = {
    data,
    filterPlanets,
    filterByNumericValues,
    changeFilterName,
    changeFilterNumericValues,
  };

  return (
    <StarWarsContext.Provider value={ contexValue }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default StarWarsProvider;
