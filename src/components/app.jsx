import React from 'react';
import MenusCustom from '../containers/menus_custom.jsx';
import TshirtPreview from './t-shirt_preview';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <TshirtPreview />
        </div>
        <div className="col-sm-6 col-xs-12">
          <h2>Stanley/Stella - STTW036</h2>
          <MenusCustom />
        </div>
      </div>
    </div>
  );
};

export default App;
