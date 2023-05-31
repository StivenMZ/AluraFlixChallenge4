import React from 'react';
import Header from '../Header';
import Footer from '../Footer';



function App({children}) {

  return (
    <React.Fragment>
      <Header />
      {children}
      {console.log(children)}
      <Footer />
    </React.Fragment>
  );
}

export default App;
