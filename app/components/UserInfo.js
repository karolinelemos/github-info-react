import React from 'react';
import UserRepos from './UserRepos';

var gidStyle = {
  marginTop: "100px"
}

const UserInfo = ({user, repos}) => {
  var userInfo = user ?
  (
    <div className="row" style={gidStyle} >
      <div className="col s6 m12 l6">
        <img className="circle responsive-img" src={user.avatar_url} alt="avatar" width="140" height="140" />
        <h5>{user.name}</h5>
        <p>Followers: {user.followers} / Following: {user.following}</p>
        <p><a className="btn btn-default red lighten-1" href={user.html_url} role="button">View details</a></p>
      </div>
      <div className="col s6 m12 l6">
        <UserRepos repos={repos} />
      </div>
  </div>
  ) : null;
  return userInfo;
}

UserInfo.propTypes = {
  user: React.PropTypes.object,
  repos: React.PropTypes.array
}

export default UserInfo;
