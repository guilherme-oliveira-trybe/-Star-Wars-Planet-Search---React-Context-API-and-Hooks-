import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const INITIAL_STATE = {
    population: false,
    orbital_period: false,
    diameter: false,
    rotation_period: false,
    surface_water: false,
  };

  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterByOrder, setFilterByOrder] = useState({});
  const [filterOrderValues, setFilterOrderValues] = useState([]);
  const [filterType, setFilterType] = useState(INITIAL_STATE);

  const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const organizePlanetsByName = (planetsArray) => {
    planetsArray.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      const SMALLER = -1;
      const BIGGER = 1;
      const IQUAL = 0;
      if (x > y) {
        return BIGGER;
      } if (x < y) {
        return SMALLER;
      }
      return IQUAL;
    });
  };

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
        case 'igual a':
          return planet[column] === inputNumber;
        default:
          return true;
        }
      }), filterName);
    organizePlanetsByName(resultAllFilters);
    setFilterPlanets(resultAllFilters);
    setFilterOrderValues(resultAllFilters);
  }, [data, filterByName, filterByNumericValues, filterByOrder]);

  useEffect(() => {
    const planets = filterOrderValues.filter((planet) => (
      planet[filterByOrder.column] !== 'unknown'));

    const unknown = filterOrderValues.filter((planet) => (
      planet[filterByOrder.column] === 'unknown'));

    const teste = () => {
      const resultFilter = () => {
        if (filterByOrder.order === 'ASC') {
          const filterAsc = planets.sort((a, b) => (
            Number(a[filterByOrder.column]) - Number(b[filterByOrder.column])));
          return [...filterAsc, ...unknown];
        }
        if (filterByOrder.order === 'DSC') {
          const filterDsc = planets.sort((a, b) => (
            Number(b[filterByOrder.column]) - Number(a[filterByOrder.column])));
          return [...filterDsc, ...unknown];
        }
        return filterOrderValues;
      };
      setFilterPlanets(resultFilter);
    };
    teste();
  }, [filterOrderValues, filterByOrder]);

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

    setFilterType({
      ...filterType,
      [column]: true,
    });
  };

  const changeFilterOrder = ({ column, order }) => {
    const orderValues = {
      column,
      order,
    };

    setFilterByOrder(orderValues);
  };

  const updateFilterByNumericValues = (column) => {
    setFilterType({
      ...filterType,
      [column]: false,
    });
  };

  const deleteFilter = (index, column) => {
    const filters = filterByNumericValues
      .filter((_filter, filterIndex) => filterIndex !== index);

    setFilterByNumericValues(filters);

    updateFilterByNumericValues(column);
  };

  const deleteAllFilters = () => {
    setFilterByNumericValues([]);
    setFilterByOrder({});
  };

  const contexValue = {
    data,
    filterPlanets,
    filterByNumericValues,
    filterType,
    changeFilterName,
    changeFilterNumericValues,
    changeFilterOrder,
    deleteFilter,
    deleteAllFilters,
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
