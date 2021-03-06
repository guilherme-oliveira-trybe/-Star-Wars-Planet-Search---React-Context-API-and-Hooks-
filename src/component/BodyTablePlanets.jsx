import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import styles from './BodyTablePlanets.module.css';

const BodyTablePlanets = () => {
  const { filterPlanets } = useContext(StarWarsContext);

  return (
    <tbody className={ styles.container }>
      {
        filterPlanets.map(({
          name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        }, index) => (
          <tr key={ index }>
            <td data-testid="planet-name">{ name }</td>
            <td>{ rotationPeriod }</td>
            <td>{ orbitalPeriod }</td>
            <td>{ diameter }</td>
            <td>{ climate }</td>
            <td>{ gravity }</td>
            <td>{ terrain }</td>
            <td>{ surfaceWater }</td>
            <td>{ population }</td>
            <td>{ films }</td>
            <td>{ created }</td>
            <td>{ edited }</td>
            <td>{ url }</td>
          </tr>
        ))
      }
    </tbody>
  );
};

export default BodyTablePlanets;
