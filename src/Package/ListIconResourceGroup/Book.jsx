import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconSvg = (width, height) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} viewBox="0 0 13.401 16.4">
        <g id="icon_book" transform="translate(434.7 -1493.8)">
            <path id="Path" d="M30.872,11.4H20.765a2.164,2.164,0,0,0-1.615.629,2.319,2.319,0,0,0-.65,1.552V25.114A2.2,2.2,0,0,0,20.765,27.4H30.872a.618.618,0,0,0,.629-.629V12.029A.631.631,0,0,0,30.872,11.4Zm-.629,14.763H20.765a1.017,1.017,0,0,1,0-2.034h9.478Zm0-3.292H20.765a2.313,2.313,0,0,0-1.007.21V13.686a1.145,1.145,0,0,1,.273-.755,1.014,1.014,0,0,1,.734-.273h9.478Z" transform="translate(-453 1482.6)" fill="#5c6a82" stroke="#5c6a82" stroke-width="0.4"/>
            <path id="Path-2" data-name="Path" d="M33.929,28.058h5.347a.629.629,0,1,0,0-1.258H33.929a.618.618,0,0,0-.629.629A.631.631,0,0,0,33.929,28.058Z" transform="translate(-464.696 1470.429)" fill="#5c6a82" stroke="#5c6a82" stroke-width="0.3"/>
            <path id="Path-3" data-name="Path" d="M33.929,42.058h5.347a.629.629,0,0,0,0-1.258H33.929a.618.618,0,0,0-.629.629A.631.631,0,0,0,33.929,42.058Z" transform="translate(-464.696 1459.365)" fill="#5c6a82" stroke="#5c6a82" stroke-width="0.3"/>
        </g>
    </svg>
);

const BookIconComponent = props => <Icon component={() => IconSvg(props.width, props.height)} {...props} />;

BookIconComponent.propTypes = {
  type: PropTypes.string,
};

BookIconComponent.defaultProps = {
  type: '',
};

export default BookIconComponent;