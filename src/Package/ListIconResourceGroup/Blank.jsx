import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconSvg = (width, height) => (
    <svg id="Icon_blank" xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} viewBox="0 0 16 16">
        <path id="Shape" d="M11.2,16H1.6A1.6,1.6,0,0,1,0,14.4V1.6A1.6,1.6,0,0,1,1.6,0h8l3.2,3.2V14.4A1.6,1.6,0,0,1,11.2,16ZM2.4,1.6a.8.8,0,0,0-.8.8V13.6a.8.8,0,0,0,.8.8h8a.8.8,0,0,0,.8-.8V4.8H8V1.6Zm7.2,0V3.2h1.6Z" transform="translate(0 0)" fill="#5c6a82"/>
    </svg>
);

const BlankIconComponent = props => <Icon component={() => IconSvg(props.width, props.height)} {...props} />;

BlankIconComponent.propTypes = {
  type: PropTypes.string,
};

BlankIconComponent.defaultProps = {
  type: '',
};

export default BlankIconComponent;