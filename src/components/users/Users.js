import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

// class Users extends Component {
    // state = {
    //     users: [
    //         {
    //             id: '1',
    //             login: 'mojombo',
    //             avatar_url: 'https://avatars3.githubusercontent.com/u/1?s=400&v=4',
    //             html_url: 'https://github.com/mojombo'
    //         },
    //         {
    //             id: '2',
    //             login: 'defunkt',
    //             avatar_url: 'https://avatars3.githubusercontent.com/u/2?s=400&u=7675c0370b7876d71d1ee9b250b540fe1be28f23&v=4',
    //             html_url: 'https://github.com/defunkt'
    //         },
    //         {
    //             id: '3',
    //             login: 'pjhyett',
    //             avatar_url: 'https://avatars2.githubusercontent.com/u/3?s=400&v=4',
    //             html_url: 'https://github.com/pjhyett'
    //         }
    //     ]
    // }

const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if(loading) {
        return<Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

// Users.propTypes = {
//     users: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired
// }

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
