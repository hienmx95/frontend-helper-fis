import PropTypes from 'prop-types';
import { setCurrentUser } from '../redux/actions/userAction';
import { getPermissionForUser } from '../redux/actions/authorizationAction';
import { getSettings } from '../redux/actions/settingsAction';
var PROJECT_CODE = process.env.PROJECT_CODE;
export default function Helper(_ref) {
  var store = _ref.store;
  store.dispatch(setCurrentUser());

  if (PROJECT_CODE) {
    store.dispatch(getPermissionForUser());
    store.dispatch(getSettings());
  }

  return null;
}
Helper.propTypes = {
  store: PropTypes.object
};