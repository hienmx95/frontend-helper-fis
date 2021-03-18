import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconSvg = (width, height) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} viewBox="0 0 16 16">
        <g id="icon" transform="translate(-2 -2)">
            <path id="Path" d="M18,10a2.377,2.377,0,0,0-2.24-2.4,2.449,2.449,0,0,0-.08-3.28,2.367,2.367,0,0,0-3.28-.08,2.406,2.406,0,0,0-4.8,0,2.449,2.449,0,0,0-3.28.08A2.449,2.449,0,0,0,4.24,7.6a2.406,2.406,0,0,0,0,4.8,2.449,2.449,0,0,0,.08,3.28,2.367,2.367,0,0,0,3.28.08,2.406,2.406,0,0,0,4.8,0,2.449,2.449,0,0,0,3.28-.08,2.367,2.367,0,0,0,.08-3.28A2.377,2.377,0,0,0,18,10Zm-8,4a4,4,0,1,1,4-4A3.961,3.961,0,0,1,10,14Z" fill="#5c6a82"/>
            <circle id="Ellipse" cx="0.8" cy="0.8" r="0.8" transform="translate(10.8 8.4)" fill="#5c6a82"/>
            <circle id="Ellipse-2" data-name="Ellipse" cx="0.8" cy="0.8" r="0.8" transform="translate(7.6 8.4)" fill="#5c6a82"/>
            <path id="Path-2" data-name="Path" d="M11.59,14.59a1.828,1.828,0,0,1-1.52-.8.6.6,0,0,1,0-.72.387.387,0,0,1,.56,0,1.122,1.122,0,0,0,1.84,0,.387.387,0,0,1,.56,0,.6.6,0,0,1,0,.72A1.605,1.605,0,0,1,11.59,14.59Z" transform="translate(-1.59 -2.19)" fill="#5c6a82"/>
        </g>
    </svg>
);

const FlowerIconComponent = props => <Icon component={() => IconSvg(props.width, props.height)} {...props} />;

FlowerIconComponent.propTypes = {
  type: PropTypes.string,
};

FlowerIconComponent.defaultProps = {
  type: '',
};

export default FlowerIconComponent;
