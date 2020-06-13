import React, {useEffect} from 'react';
import {connect} from "react-redux";
import classes from './FollowingUsersProfile.module.css'
import * as actions from '../../../store/actions/index'
import Spinner from '../../UI/Spinner/Spinner';

const FollowingUsersProfile = props => {
    const {onFetchFollowingUsers} = props;

    useEffect(() => {
        onFetchFollowingUsers();
    }, [onFetchFollowingUsers]);

    let users = <Spinner/>

    if (!props.loading) {
        users = props.followingUsers.map(user => (
            <li>
                {user.username}
            </li>
        ))
    }

    return (
        <div className={classes.Following}>
            <h3>OBSERWOWANI UŻYTKOWNICY</h3>
            <div>
                <ul>
                    {users}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        followingUsers: state.followingUsers.followingUsers,
        loading: state.followingUsers.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchFollowingUsers: () => dispatch(actions.fetchFollowingUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowingUsersProfile);



// const FollowingUsersProfile = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         const fetchJson = async () => {
//             const response = await axios({
//                 method: 'get',
//                 url: `${API_URL}/users/getObservedUsers`,
//                 headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
//             }).then(function (response) {
//                 //handle success
//                 console.log(response);
//                 return response;
//             })
//                 .catch(function (response) {
//                     //handle error
//                     console.log(response);
//                 });
//             console.log(response.data)
//             setData(response.data)
//         };
//         fetchJson();
//     }, []);
//     return (
//         <div className={classes.Following}>
//             <h3>OBSERWOWANI UŻYTKOWNICY</h3>
//             <div>
//                 <ul>
//                     {data.map(item => (
//                         <li>
//                             {item.username}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default FollowingUsersProfile;