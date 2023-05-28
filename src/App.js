import ResetStyles from './ResetStyles';
import Global from './Global';
import React from 'react';
import Banner from './Components/Banner';
import DefaultPage from './Components/DefaultPage'
 

function App() {
  return (
    <React.Fragment>
      <ResetStyles/>
      <Global />
      <DefaultPage>
        <Banner />
      </DefaultPage>
    </React.Fragment>
  );
}

export default App;
