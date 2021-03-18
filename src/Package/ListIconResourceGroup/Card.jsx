import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconSvg = (width, height) => (
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} viewBox="0 0 16 11.2">
        <path id="Shape" d="M14.4,11.2H1.6A1.6,1.6,0,0,1,0,9.6v-8A1.6,1.6,0,0,1,1.6,0H14.4A1.6,1.6,0,0,1,16,1.6v8A1.6,1.6,0,0,1,14.4,11.2ZM2.4,1.6a.8.8,0,0,0-.8.8V8.8a.8.8,0,0,0,.8.8H13.6a.8.8,0,0,0,.8-.8V2.4a.8.8,0,0,0-.8-.8Z" transform="translate(0 0)" fill="#5c6a82"/>
        <path id="Path" d="M0,0H16V1.6H0Z" transform="translate(0 3.2)" fill="#5c6a82"/>
        <path id="Path-2" data-name="Path" d="M0,0H4.8V.8H0Z" transform="translate(3.2 7.2)" fill="#5c6a82"/>
    </svg>
);

const CardIconComponent = props => <Icon component={() => IconSvg(props.width, props.height)} {...props} />;

CardIconComponent.propTypes = {
  type: PropTypes.string,
};

CardIconComponent.defaultProps = {
  type: '',
};

export default CardIconComponent;
