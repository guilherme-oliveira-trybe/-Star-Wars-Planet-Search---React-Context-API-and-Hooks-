import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TablePlanets = () => {
  const { data } = useContext(StarWarsContext);
  const [keysName, setKeysName] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const key = Object.keys(data[0]);
      setKeysName(key);
    }
  }, [data]);

  console.log(data);

  return (
    <table>
      <thead>
        <tr>
          {keysName.map((key) => <th key={ key }>{key}</th>)}
        </tr>
      </thead>
    </table>
  );
};

export default TablePlanets;
