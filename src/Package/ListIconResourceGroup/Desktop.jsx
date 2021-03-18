import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconSvg = (width, height) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} viewBox="0 0 16.2 14.6">
        <path id="icon-desktop" d="M10.8,14.2H9.2v1.6h1.6Zm1.6,0v1.6H14a.8.8,0,0,1,0,1.6H6a.8.8,0,1,1,0-1.6H7.6V14.2h-4A1.6,1.6,0,0,1,2,12.6v-8A1.6,1.6,0,0,1,3.6,3H16.4A1.6,1.6,0,0,1,18,4.6v8a1.6,1.6,0,0,1-1.6,1.6ZM3.6,4.6v8H16.4v-8Z" transform="translate(-1.9 -2.9)" fill="#5c6a82" stroke="#5c6a82" stroke-width="0.2"/>
    </svg>
);

const DesktopIconComponent = props => <Icon component={() => IconSvg(props.width, props.height)} {...props} />;

DesktopIconComponent.propTypes = {
  type: PropTypes.string,
};

DesktopIconComponent.defaultProps = {
  type: '',
};

export default DesktopIconComponent;
