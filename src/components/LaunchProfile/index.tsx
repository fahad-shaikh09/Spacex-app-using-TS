import * as React from 'react';
import { useLaunchProfileQuery } from '../../generated/graphql';
import LaunchProfile from './LaunchProfile';

interface OwnProps {
  id: number;
}


const LaunchProfileContainer = ({ id }: OwnProps) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) }
  });

  React.useEffect(() => {
    refetch();
    // eslint-disable-next-line 
  },[id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <h1>Select a flight from the panel</h1>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;