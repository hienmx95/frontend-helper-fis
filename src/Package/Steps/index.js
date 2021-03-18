import React from 'react';

import Icon from '../icons';

const Steps = ({ children, current = 1, reject = false }) => {
  const _getStatus = (index) => {
    index = index + 1;
    if (current < index) {
      return 'wait';
    } else if (current > index || current === children.length) {
      return 'success';
    } else {
      if (reject) {
        return 'error';
      }
      return 'processing';
    }
  };
  return (
    <div className="fwork-steps">
      {React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          status: child.props.status || _getStatus(i)
        });
      })}
    </div>
  );
};

// eslint-disable-next-line react/display-name
Steps.Step = function ({ title, description, status }) {
  return (
    <div className={`fwork-step-item ${status}`}>
      <span>
        <Icon type={status} />
      </span><div className="fwork-step-item-content">
        <h5>{title}</h5>
        {
          React.isValidElement(description)
            ? description
            : <p dangerouslySetInnerHTML={{ __html: description }} />
        }

      </div>
    </div>
  );
};

export default Steps;
