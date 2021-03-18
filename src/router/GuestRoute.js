import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import history from './history';
import { getToken } from '../localStorageCookies';

class GuestRoute extends React.Component {
  constructor (props) {
    super(props);
    history.listen((location, action) => {
      const token = getToken();
      if (!token && action === 'POP') {
        window.location.reload();
      }
    });
  }

  render () {
    const { component: Component, authUser, pathDefault, ...rest } = this.props;
    if (!authUser || authUser.loading) return null;
    return (
      <Route {...rest} render={ props => {
        return (
          (!authUser.isLogged)
            ? <Component {...props} />
            : <Redirect to={{ pathname: pathDefault ? pathDefault : '/app-menu', state: { from: props.location } }} />
        );
      }} />
    );
  }
}

function mapStateToProps (state) {
  return {
    authUser: state.authUser,

  };
}

export default connect(mapStateToProps, null)(GuestRoute);
