// import React, { Component } from 'react'
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// class UserItem extends Component {
    // state = {
    //     id: 'id',
    //     login: 'mojombo',
    //     avatar_url: 'https://avatars3.githubusercontent.com/u/1?s=400&v=4',
    //     html_url: 'https://github.com/mojombo'
    // };

// const UserItem = props => {
const UserItem = ({ user: { login, avatar_url, html_url } }) => {

    // render() {
        // const { login, avatar_url, html_url } = this.state;
        // const { login, avatar_url, html_url } = this.props.user;
        // const { login, avatar_url, html_url } = props.user;

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }}/>
                <h3>{login}</h3>

                <div>
                    {/* <a href={html_url} className="btn btn-dark btn-sm my-1">More</a> */}
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
                </div>
            </div>
        );
    // }
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem
