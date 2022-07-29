import { BrowserRouter,Routes,Route } from "react-router-dom";
import Createorder from "./components/createorder/createorder";
import Signin from "./components/signin/signin";
import Register from "./components/register/register";
const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin/>}></Route>
<<<<<<< HEAD

=======
      <Route path="/register" element={<Register/>}></Route>
>>>>>>> 95aeb24ae2742e80add2bdf3c401dbd6cdcaead8
    </Routes>
    </BrowserRouter>
    )
}
export default App;