import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconSvg = (width, height) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} viewBox="0 0 11.486 16">
        <path id="icon" d="M88.407,14.31,78.585,9.747A.834.834,0,0,0,77.4,10.5v9.1a.863.863,0,0,0,.01.133v5.1a.832.832,0,1,0,1.664,0V20.131L88.4,15.818a.833.833,0,0,0,.483-.756A.823.823,0,0,0,88.407,14.31ZM79.077,18.3V11.811l7,3.252Z" transform="translate(-77.4 -9.67)" fill="#5c6a82"/>
    </svg>
);

const FlagIconComponent = props => <Icon component={() => IconSvg(props.width, props.height)} {...props} />;

FlagIconComponent.propTypes = {
  type: PropTypes.string,
};

FlagIconComponent.defaultProps = {
  type: '',
};

export default FlagIconComponent;
