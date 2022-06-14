import React from 'react';
import TablePlanets from '../component/TablePlanets';
import FormSearch from '../component/FormSearch';
import Filters from '../component/Filters';
import styles from './Home.module.css';

const Home = () => (
  <main className={ styles.container }>
    <FormSearch />
    <Filters />
    <TablePlanets />
  </main>
);

export default Home;
