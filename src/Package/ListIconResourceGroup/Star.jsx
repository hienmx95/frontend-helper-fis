import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconSvg = (width, height) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} viewBox="0 0 16 15.111">
        <g id="Icon_star" transform="translate(-3 -4)">
            <g id="Icon_star-2" data-name="Icon_star" transform="translate(3 4)">
            <path id="Path" d="M7.089,13.2a1.778,1.778,0,0,1,1.821,0l2.97,1.775a.93.93,0,0,0,1.393-1l-.78-3.307a1.778,1.778,0,0,1,.574-1.758l2.609-2.234a.92.92,0,0,0-.533-1.617l-3.451-.29A1.778,1.778,0,0,1,10.206,3.7L8.86.561a.94.94,0,0,0-1.72,0L5.794,3.692A1.778,1.778,0,0,1,4.31,4.762l-3.452.29A.92.92,0,0,0,.324,6.668L2.933,8.9a1.778,1.778,0,0,1,.574,1.758l-.78,3.307a.93.93,0,0,0,1.393,1Z" transform="translate(0 0)" fill="#5c6a82"/>
            </g>
        </g>
    </svg>
);

const StarIconComponent = props => <Icon component={() => IconSvg(props.width, props.height)} {...props} />;

StarIconComponent.propTypes = {
  type: PropTypes.string,
};

StarIconComponent.defaultProps = {
  type: '',
};

export default StarIconComponent;