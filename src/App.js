import './App.css';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store"; 
import { PersistGate } from 'redux-persist/integration/react';
import Landing from "./pages/landing/landing"

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
            <Landing/>
          </PersistGate>
        </Provider>
    </div>
  );
}

export default App;
