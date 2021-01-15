import * as React from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: LaunchListQuery;
}

const className = 'LaunchList';


const idOfFlight = (i:number) => {
  console.log("Flight ", i+1, "is Clicked") ;
}

const LaunchList: React.FC<Props> = ({ data }) => (
  
 

  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <button key={i} className={`${className}__item`} onClick={() => idOfFlight(i)}>
                {launch?.mission_name} ({launch.launch_year})
              </button>
            ),
        )}
    </ol>
  </div>
);

export default LaunchList;