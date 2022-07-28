import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signin from "./components/signin/signin";
const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}
export default App;