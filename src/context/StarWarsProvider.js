import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
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

  const contexValue = {
    data,
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
