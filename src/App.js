import Home from "./routes/home/home.component";
// ./ same layer ../ next layer
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/sign-in.component";




const Shop = () => {
  return (
    <h1> I am the shop page</h1>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        {/* index when have nothing there  */}
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
