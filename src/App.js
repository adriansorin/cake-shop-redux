import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import store from './redux/store'
// import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              {/* <CakeContainer/> */}
              <ItemContainer/>
              <ItemContainer cake/>
              <HooksCakeContainer/>
              <IceCreamContainer/>
              <NewCakeContainer/>
        </div>
      </Provider>
  );
}

export default App;
