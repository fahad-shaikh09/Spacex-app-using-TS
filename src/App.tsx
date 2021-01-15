import React, {useState} from 'react';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';

import './App.css';

const App = () => {

  const [id,SetId] = useState(0);
 
  const handleIdChange = React.useCallback(id => {
    SetId(id);
  }, []);

  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id}/>
    </div>
  );
};

export default App;