import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import history from './history';
import { getToken } from '../localStorageCookies';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      const token = getToken();
      if (!token && action === 'POP') {
        window.location.reload();
      }
    });
  }

  render() {
    const { component: Component, authUser, isPortal, ...rest } = this.props;
    if (!authUser || authUser.loading) return null;

    if (!isPortal && !authUser.isLogged) {
      window.location.href = `/login?ref=${window.location.href}`;
    }

    if (!authUser.companies || authUser.isLogged && authUser.companies.length < 1) {
      if (window.location.pathname !== '/register-company') {
        if (isPortal && this.props.history) {
          this.props.history.push('/register-company');
        } else {
          window.location.href = '/register-company';
        }
      }
    }

    if (authUser.isLogged && window.location.pathname === '/register-company') {
      const owner = authUser.companies.findIndex(function (item) {
        return item.company.represent === authUser._id;
      });
      if (owner >= 0) {  // represent Company
        if (authUser.company) {
          window.location.href = '/app-menu';
        } else {
          if (isPortal && this.props.history) {
            this.props.history.push('/companies');
          } else {
            window.location.href = '/companies';
          }
        }
      }
    }

    if (window.location.pathname === '/app-menu' && !authUser.company) {
      window.location.href = '/companies';
    }

    if (authUser.company && !authUser.company.isPlan) {
      if (window.location.pathname !== '/choose-plan' && window.location.pathname !== '/payment') {
        window.location.href = '/choose-plan';
      }
    }

    if ((window.location.pathname === '/choose-plan' || window.location.pathname === '/choose-plan') && authUser.company.isPlan) {
      window.location.href = '/app-menu';
    }

    return (
      <Route {...rest} render={props => {
        return (
          (authUser.isLogged)
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        );
      }} />
    );
  }
}

function mapStateToProps(state) {
  return {
    authUser: state.authUser
  };
}

export default connect(mapStateToProps, null)(PrivateRoute);
