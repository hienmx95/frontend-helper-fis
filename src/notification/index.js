import openNotification from './openNotification';

const handleNotification = (method, response = {}, options = {}) => {
  if (typeof (options['show']) !== 'boolean') {
    if (method === 'GET')
      return;
  } else {
    if (!options['show'])
      return;
  }

  if (!options.hasOwnProperty('type')) {
    options.type = 'success';
  }

  if (!response.success) {
    options.type = 'error';
  }
  options.message = response.hasOwnProperty('message') ? response.message : options.message;
  if (!options.message) return;

  openNotification(options);
};

export default handleNotification;
