import React from 'react';
import { Route } from 'react-router-dom';


class PublicRoute extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={ props => (<Component {...props} />)} />
    );
  }
}

export default PublicRoute;
