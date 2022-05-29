import './App.css';
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home_page/HomePage';
import AddPost from './components/add_post/AddPost';
import UserPosts from './components/user_posts/UserPosts';
import MonumentPage from './components/monument_page/MonumentPage';

function App() {
  return(
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<HomePage/>}>
        </Route>
        <Route exact path='/add_post' element={<AddPost/>}>
        </Route>
        <Route exact path='/user_posts' element={<UserPosts/>}>
        </Route>
        <Route exact path='/monument_page' element={<MonumentPage/>}> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
