import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconSvg = (width, height) => (
    <svg id="Icon_love" xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} viewBox="0 0 18 16">
        <path id="Path" d="M1.379,8.274A4.841,4.841,0,0,1,0,4.889,4.963,4.963,0,0,1,9,2.077a4.963,4.963,0,0,1,9,2.812A4.845,4.845,0,0,1,16.493,8.4L9,16Z" fill="#5c6a82"/>
    </svg>
);

const HeartIconComponent = props => <Icon component={() => IconSvg(props.width, props.height)} {...props} />;

HeartIconComponent.propTypes = {
  type: PropTypes.string,
};

HeartIconComponent.defaultProps = {
  type: '',
};

export default HeartIconComponent;
