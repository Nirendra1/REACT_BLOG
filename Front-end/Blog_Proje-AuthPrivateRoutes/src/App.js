import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import SignUp from './component/SignUp'
import Home from './component/Home'
import Blog from './component/Blog';
import PrivateNavbar from './Routs/PrivateNavbar';
import BlogShow from './component/BlogShow';

let  userid = localStorage.getItem("localstorage_User_Id") == null ? false : true;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/" element={userid ? <Home /> : <Login/>} />
          <Route path="/signup" element={userid ? <Home /> : <SignUp />} />
          <Route element={<PrivateNavbar />} >
            <Route path='/home' element={ <Home/>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/showPost" element={<BlogShow />} />
    

            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />\
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
