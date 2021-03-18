# Frontend Helper

## Setup

`npm install git+ssh://git@118.68.218.91:fpt.work/helper/frontend-helper.git`

## Import

### Add component Helper

Import `Helper` into `Root.jsx`

```javascript
import { Helper } from '@fwork/frontend-helper';

import App from './components/App';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Helper store={store} />
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
}
```

### Import authUser for Redux

Import `authUser` to `reducers/index.js`

```javascript
import { authUser } from '@fwork/frontend-helper';

const appReducer = combineReducers({
  auth,
  users,
  project,
  authUser,
});
```

### Get authUser info in component

```javascript
import React from 'react';

class PrivateRoute extends React.Component {
  componentDidMount() {
    const authUser = this.props.authUser;
  }
}

function mapStateToProps(state) {
  return {
    authUser: state.authUser,
  };
}

export default connect(mapStateToProps, null)(PrivateRoute);
```

### Fetch Data

- Set env for `URL_BACKEND`

```dotenv
URL_BACKEND=http://fpt.work/api/v1/portal

#Or

URL_BACKEND=http://fpt.work/api/v1/users

```

```javascript

const { fetchAPI } = require('@fwork/frontend-helper');


// Promise
const baseURL = null; //Default = process.env.URL_BACKEND
const url = 'profiles';
const method = 'GET';
const params = {  //For GET method. Default = {}
  userId: 123,
  name: 'Fwork'
};

const body = {  //For POST method. Default = null
  userId: 123,
  name: 'Fwork'
};

const notification = {
  type: 'comment', // default POST --> success; PUT,PATCH --> edit; DELETE --> remove
  message: 'ABC đã comment vào DEX', // default form server
  show: true // defalut method GET === false
}

//Option 1
fetchAPI(url, method, data, params, baseURL, notification)
  .then(data => {
    const user = data.user;
    const resource = data.permissions.filter(item => item.resourceCode === resourceCode);
    if (!user) {
      throw {status: HttpStatus.NOT_FOUND, message: "User doesn't exist !"};
    }
    ...
  })
  .catch(next);

//Option 2
const data = {
  baseURL,
  url,
  method,
  params,
  body,
  notification
};
fetchAPI(data)
  .then(data => {
    const user = data.user;
    const resource = data.permissions.filter(item => item.resourceCode === resourceCode);
    if (!user) {
      throw {status: HttpStatus.NOT_FOUND, message: "User doesn't exist !"};
    }
    ...
  })
  .catch(next);

// Async/Await

async function getUsers() {
  try {
    let users = await fetchAPI(baseURL, url, method);
  } catch (e) {
    throw e;
  }
}

```

### PrivateRoute, PublicRoute, GuestRoute

```javascript
import { PublicRoute, GuestRoute, PrivateRoute } from '@fwork/frontend-helper';

<Switch history={history}>
  <PublicRoute exact path="/" component={Home} /> //Public
  <GuestRoute exact path="/login" component={Login} /> // Only guest
  <PrivateRoute exact path="/edit-profile" component={EditProfile} /> // Only
  user authenticated
</Switch>;
```

## Add settings into Redux ( supported version: v1.3.7 ).

Import `settingReducer` into `reducers/index.js`

```javascript

import { settingReducer } from '@fwork/frontend-helper';

export default combineReducers({
  ...
  settingReducer
});

// Add PROJECT_CODE into .env
example: PROJECT_CODE=setting-13121f99

```

Import `settingReducer` into `reducers/index.js`

```javascript

import { settingReducer } from '@fwork/frontend-helper';

export default combineReducers({
  ...
  settingReducer
});

// Add PROJECT_CODE into .env
example: PROJECT_CODE=setting-13121f99

```

### Vote

```javascript
import { openVote } from '@fwork/frontend-helper';
  openVote({
    onSubmit: async (data) => {
      const { data: newVote } = await fetchAPI(api.request + `vote/${code}`, 'PUT', data);
      if (!newVote.success || !newVote.data) {
        return;
      }
      if (typeof cb === 'function') {
        cb(newVote.data);
      }
    },
    title: 'Đánh giá đề xuất',
    initialValue: initVote
  });

```
