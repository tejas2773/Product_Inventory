import Dashboard from "../pages/Dashboard";
import { Routes } from "react-router"
import { BrowserRouter } from "react-router";
import { Route } from "react-router";
import Admin from "../pages/Admin";
import Registration from "./components/Registration";
import {Provider} from "react-redux";
import {store} from "../Redux/store";

function App() {
  
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/:id" element={<Dashboard />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
