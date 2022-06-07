import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const result = await fetchApi();
      setData(result);
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
