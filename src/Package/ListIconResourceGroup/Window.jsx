import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconSvg = (width, height) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} viewBox="0 0 17.6 17.6">
    <g id="Group_2" data-name="Group 2" transform="translate(-299.2 -384.2)">
      <path id="Rectangle_12" data-name="Rectangle 12" d="M2,0H8A0,0,0,0,1,8,0V8A0,0,0,0,1,8,8H0A0,0,0,0,1,0,8V2A2,2,0,0,1,2,0Z" transform="translate(300 385)" fill="none" stroke="#5c6a82" stroke-width="1.6"/>
      <path id="Rectangle_13" data-name="Rectangle 13" d="M0,0H6A2,2,0,0,1,8,2V8A0,0,0,0,1,8,8H0A0,0,0,0,1,0,8V0A0,0,0,0,1,0,0Z" transform="translate(308 385)" fill="none" stroke="#5c6a82" stroke-width="1.6"/>
      <path id="Rectangle_14" data-name="Rectangle 14" d="M0,0H8A0,0,0,0,1,8,0V8A0,0,0,0,1,8,8H2A2,2,0,0,1,0,6V0A0,0,0,0,1,0,0Z" transform="translate(300 393)" fill="none" stroke="#5c6a82" stroke-width="1.6"/>
      <path id="Rectangle_15" data-name="Rectangle 15" d="M0,0H8A0,0,0,0,1,8,0V6A2,2,0,0,1,6,8H0A0,0,0,0,1,0,8V0A0,0,0,0,1,0,0Z" transform="translate(308 393)" fill="none" stroke="#5c6a82" stroke-width="1.6"/>
    </g>
  </svg>
);

const WindowIconComponent = props => <Icon component={() => IconSvg(props.width, props.height)} {...props} />;

WindowIconComponent.propTypes = {
  type: PropTypes.string,
};

WindowIconComponent.defaultProps = {
  type: '',
};

export default WindowIconComponent;