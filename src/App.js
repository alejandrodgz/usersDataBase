import Users from "./components/Users/Users";
import AddUser from "./components/AddUser/AddUser";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/adduser" element={<AddUser />} />
    <Route path="/edituser/:id" element={<AddUser />} />
    <Route path="/users" element={<Users />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
