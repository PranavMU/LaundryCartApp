import { BrowserRouter,Routes,Route } from "react-router-dom";
import Createorder from "./components/createorder/createorder";
import Signin from "./components/signin/signin";
import Register from "./components/register/register";
<<<<<<< HEAD
import Summary from "./components/createorder/summary";
=======
import Pastorders from "./components/pastorder/pastorders";
>>>>>>> 3f448df0d233ecdbfc9fc877357f6da8b19601a1
const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/order" element={<Createorder/>} ></Route>
<<<<<<< HEAD
      <Route path="/order/summary" element={<Summary/>}></Route>
      </Routes>
=======
      <Route path="/order/history" element={<Pastorders/>} ></Route>
    </Routes>
>>>>>>> 3f448df0d233ecdbfc9fc877357f6da8b19601a1
    </BrowserRouter>
    )
}
export default App;