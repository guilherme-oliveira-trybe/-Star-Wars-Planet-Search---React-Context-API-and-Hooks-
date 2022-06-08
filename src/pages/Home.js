import React from 'react';
import TablePlanets from '../component/TablePlanets';
// import StarWarsContext from '../context/StarWarsContext';
import FormSearch from '../component/FormSearch';

const Home = () => (
  <main>
    <FormSearch />
    <br />
    <hr />
    <TablePlanets />
  </main>
);

export default Home;
