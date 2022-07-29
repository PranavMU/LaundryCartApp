import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signin from "./components/signin/signin";
import Register from "./components/register/register";
const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}
export default App;