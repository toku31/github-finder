import React, { useState, useContext } from 'react'
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {   // showClear, clearUsersを削除  // { setAlert }
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const[text, setText] = useState('');
    // state={
    //     text: ''
    // }

    // onChange=(e)=> {
    //     // this.setState({ text: e.target.value });
    //     this.setState({ [e.target.name]: e.target.value });
    // }

    const onSubmit = e => {
        e.preventDefault();
        //console.log(this.state.text);
        if(text === '') {  // this.state.text => text 
            alertContext.setAlert('Please enter something', 'light');  //this.props.setAler => setAlert 
        }else {
            githubContext.searchUsers(text);  // this.props.searchUsers(this.state.text) => searchUsers(text)
            setText('');  // this.setState({ text:'' });
        }
    };

    // onChange = e => this.setState({ [e.target.name]: e.target.value });
    const onChange = e => setText(e.target.value);

    // render() {
    //     const { showClear, clearUsers } = this.props;

        return (
            <div>
                <form onSubmit={onSubmit} className="form"> {/* this.onSubmit => onSubmit */}
                    <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>  {/* this.onChange => onChange */}
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {githubContext.users.length > 0 && (<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>)}
               
            </div>
        )
    // }
}

// Search.propTypes = {
//     // searchUsers: PropTypes.func.isRequired,
//     //clearUsers: PropTypes.func.isRequired,
//     //showClear: PropTypes.bool.isRequired,
//     setAlert: PropTypes.func.isRequired
// };

export default Search
