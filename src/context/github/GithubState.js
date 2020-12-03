import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Github users
  const searchUsers = async text => {
    setLoading(); //this.setState({ loading:true })

    const res = await axios.get(`https:api.github.com/search/users?q=${text}&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // setLoading(false);
    dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
    });
  };

    // Get User
    const getUser = async username => {
    setLoading(); // this.setState({ loading:true })

    const res = await axios.get(`https:api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 
    dispatch({
        type: GET_USER,
        payload: res.data
    });
  };

    // Get Repos
  const getUserRepos = async username => {
    setLoading(); // this.setState({ loading:true });

    const res = await axios.get(`https:api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // setRepos(res.data);// this.setState({ repos: res.data, loading: false }); // APIからデータを取得
    // setLoading(false);
    dispatch({
        type: GET_REPOS,
        payload: res.data
    });
  };

    // Clear Users
    const clearUsers = () =>dispatch({ type: CLEAR_USERS });
    // Set Loading
    const setLoading = () =>dispatch({ type: SET_LOADING });
   

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;