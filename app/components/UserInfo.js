var React = require('react');
var UserRepos = require('./UserRepos');

var gidStyle = {
  marginTop: "100px"
}

function UserInfo(props) {
  var userInfo = props.user ?
  (
    <div className="row" style={gidStyle} >
      <div className="col s6 m12 l6">
        <img className="circle responsive-img" src={props.user.avatar_url} alt="avatar" width="140" height="140" />
        <h5>{props.user.name}</h5>
        <p>Followers: {props.user.followers} / Following: {props.user.following}</p>
        <p><a className="btn btn-default red lighten-1" href={props.user.html_url} role="button">View details</a></p>
      </div>
      <div className="col s6 m12 l6">
        <UserRepos repos={props.repos} />
      </div>
  </div>
  ) : null;
  return userInfo;
}

UserInfo.propTypes = {
  user: React.PropTypes.object,
  repos: React.PropTypes.array
}

module.exports = UserInfo;
