var React = require('react');


var buttonStyle = {
  marginLeft: "10px"
};

var repoStyle = {
  padding: "10px",
  borderBottom: "2px solid #26A69A"
}

var UserRepos = React.createClass({
  getInitialState: function() {
    return {
      reposCount: 0
    }
  },
  componentWillReceiveProps: function(props) {
    this.setState(
      {
        reposCount: props.repos.length
      }
    )
  },
  render: function() {
    var repos = this.props.repos.map(function(repo, key) {
      return (
        <div key={key} className="thumbnail">
          <div className="caption">
            <h5>{repo.name}
                <span className="chip" style={buttonStyle}>{repo.stargazers_count} STARS</span>
            </h5>
            <p>{repo.description}</p>
            <p>
              <a href={repo.html_url} className="btn btn-primary blue lighten-4" role="button">Repository</a>
              <a href={repo.html_url + '/issues'} style={buttonStyle} className="btn btn-default indigo lighten-4" role="button">Issues ({repo.open_issues})</a>
            </p>
          </div>
        </div>
      )
    });
    return (
      <div>
        <h4 style={repoStyle}>{this.state.reposCount} repositories</h4>
        {repos}
      </div>
    )
  }
});

module.exports = UserRepos;
