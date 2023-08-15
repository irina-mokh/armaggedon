import { getDeclension } from '@/app/helpers';
import { useContext } from 'react';
import { AppContext } from '../Layout';

import styles from './distance.module.scss';

type DistanceProps = {
	'lunar': string,
	'kilometers': string,
}
export const Distance = (props: DistanceProps) => {

	const { measure } = useContext(AppContext);
	const distance = Math.round(Number(props[measure]));

  const distanceMeasure =
    measure == 'kilometers' ? 'км' : getDeclension(distance, 'лунная орбита', 'лунные  орбиты', 'лунных орбит');

		return (
			<div className={styles.distance}>
        <p>
          {distance.toLocaleString()}
          <span>{' ' + distanceMeasure}</span>
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="129" height="6" viewBox="0 0 129 6" fill="none">
          <path
            d="M0 3L5 5.88675L5 0.113249L0 3ZM129 3.00001L124 0.113259L124 5.88676L129 3.00001ZM4.5 3.5L124.5 3.50001L124.5 2.50001L4.5 2.5L4.5 3.5Z"
            fill="white"
            fillOpacity="0.5"
          />
        </svg>
      </div>
		)
}