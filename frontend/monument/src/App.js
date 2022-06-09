import './App.css';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/Header'
import HomePage from './components/home_page/HomePage';
import AddPost from './components/add_post/AddPost';
import UserPosts from './components/user_posts/UserPosts';
import MonumentPage from './components/monument_page/MonumentPage';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Login';
import Comment from './components/Comment'
import { AuthProvider } from './contexts/AuthContext'
import Register from './components/Register';

function App() {
  return(
    <Router>
      <Header></Header>
      <Switch>
        <AuthProvider>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
          <Route exact path='/user_posts'>
            <UserPosts></UserPosts>
          </Route>
          <Route exact path='/monument_page'>
            <MonumentPage></MonumentPage>
          </Route>
          <PrivateRoute exact path='/comment'>
            <Comment></Comment>
          </PrivateRoute>
          <PrivateRoute exact path='/add_post'>
            <AddPost></AddPost>
          </PrivateRoute>
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
