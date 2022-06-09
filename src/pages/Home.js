import React from 'react';
import TablePlanets from '../component/TablePlanets';
import FormSearch from '../component/FormSearch';
import Filters from '../component/Filters';

const Home = () => (
  <main>
    <FormSearch />
    <br />
    <Filters />
    <hr />
    <TablePlanets />
  </main>
);

export default Home;
