// App Class to Function Component
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import Users from './components/users/Users';
import User from './components/users/User';
// import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About';
// import axios from 'axios';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => { // class App extends Component {
  //console.log(123)
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);
  
  // state = {
  //   users: [],
  //   user: {},
  //   loading: false,
  //   alert: null,
  //   repos: []
  // }

  // async componentDidMount() {
  //   // this.state.loading = true;   // NG
  //   this.setState({ loading: true });

  //   const res = await axios.get(`https:api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   console.log(res.data);  //GITHUB APIのOATH認証を利用

  //   // this.setState({ users: res.data, loading: false }); // APIからデータを取得
  // }

  // searchUsers = (text) => {
  //   console.log(text)
  // }

  // 以下はGithubState.jsに移動
  // // Search Github users
  // const searchUsers = async text => {
  //   setLoading(true); //this.setState({ loading:true })

  //   const res = await axios.get(`https:api.github.com/search/users?q=${text}&
  //   client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // console.log(res.data);  //GITHUB APIのOATH認証を利用

  //   setUsers(res.data.items); // this.setState({ users: res.data.items, loading: false }); // APIからデータを取得
  //   setLoading(false);
  // };

  // Get single Github user
  // const getUser = async (username) => {
  //   setLoading(true); // this.setState({ loading:true })
  //   const res = await axios.get(`https:api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setUser(res.data); // this.setState({ user: res.data, loading: false }); // APIからデータを取得
  //   setLoading(false);
  // };

//  // Get users repos
//   const getUserRepos = async username => {
//     setLoading(true); // this.setState({ loading:true });

//     const res = await axios.get(`https:api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//     setRepos(res.data);// this.setState({ repos: res.data, loading: false }); // APIからデータを取得
//     setLoading(false);
//   }

  // // Clear users from state
  //  const clearUsers = () => { // clearUsers = () => this.setState({ repos: [], loading: false});
  //   setUsers([]);
  //   setLoading(false);
  // }

  // Set Alert
  // const showAlert = (msg, type) => {
  //   setAlert({msg, type }); // this.setState({alert: {msg: msg, type: type }});
  //   setTimeout(() => setAlert(null), 5000); // this.setState({ alert: null }), 5000)
  // };

  // render() {
  //  const { users, user, repos, loading } = this.state;

    return (
     <GithubState>
      <AlertState>
      <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert/>  
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </div>
      </Router>
      </AlertState>
    </GithubState>
    );
  // }
};

export default App;
