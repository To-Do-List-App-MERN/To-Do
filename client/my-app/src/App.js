import React from 'react';
import Header from "./components/Header";
import AddToDoList from "./components/AddToDoList"
import ToDos from "./components/ToDos"
import {Provider} from "./context"
import './App.css';

function App() {
  return (
    <Provider>
    <div className="App">
    <Header/>
    <AddToDoList/>
    <ToDos/>
    </div>
    </Provider>
  );
}

export default App;
