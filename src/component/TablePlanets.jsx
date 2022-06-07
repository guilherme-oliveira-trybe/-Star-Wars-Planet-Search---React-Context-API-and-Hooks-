import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import BodyTablePlanets from './BodyTablePlanets';

const TablePlanets = () => {
  const { data } = useContext(StarWarsContext);
  const [keysName, setKeysName] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const key = Object.keys(data[0]);
      setKeysName(key);
    }
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          {keysName.map((key) => <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <BodyTablePlanets />
    </table>
  );
};

export default TablePlanets;
