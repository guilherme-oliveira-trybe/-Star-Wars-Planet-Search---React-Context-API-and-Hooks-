import React from 'react';
import BodyTablePlanets from './BodyTablePlanets';
import HeaderTablePlanets from './HeaderTablePlanets';
import styles from './TablePlanets.module.css';

const TablePlanets = () => (
  <table className={ styles.container }>
    <HeaderTablePlanets />
    <BodyTablePlanets />
  </table>
);

export default TablePlanets;
