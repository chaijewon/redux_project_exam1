import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import store from "./store/store";
import {Provider} from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <div className={"container"}>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
