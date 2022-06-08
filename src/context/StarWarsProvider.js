import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterPlanets, setFilterPlanets] = useState([]);
  const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(urlApi).then((response) => response.json());
      const filterResults = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setData(filterResults);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const teste = data.filter(({ name }) => name.includes(filterByName));
    setFilterPlanets(teste);
  }, [data, filterByName]);

  const changeFilterName = (value) => {
    setFilterByName(value);
  };

  const contexValue = {
    data,
    filterPlanets,
    changeFilterName,
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
