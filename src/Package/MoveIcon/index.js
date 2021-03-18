import React from 'react';
import { Icon, Button } from 'antd';
import PropTypes from 'prop-types';

const IconSvg = (width, height) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width || 12} height={height || 12} viewBox="0 0 12 12">
    <g id="icon_move" transform="translate(12) rotate(90)">
      <path id="Path" d="M2.381,8.71a.748.748,0,0,0,.414.263.8.8,0,0,0,.408,0,.748.748,0,0,0,.416-.264L5.776,6.642a.712.712,0,0,0,0-1.037l-.024-.023a.788.788,0,0,0-1.081,0l-.889.852V.75A.749.749,0,0,0,3.034,0H2.966a.749.749,0,0,0-.748.75V6.435l-.889-.852a.788.788,0,0,0-1.081,0l-.024.023a.712.712,0,0,0,0,1.037Z" transform="translate(0 3)" fill="#5c6a82" />
      <path id="Path-2" data-name="Path" d="M3.619.29A.748.748,0,0,0,3.2.027a.8.8,0,0,0-.408,0A.747.747,0,0,0,2.381.29L.224,2.358a.712.712,0,0,0,0,1.037l.024.023a.788.788,0,0,0,1.081,0l.889-.852V8.25A.749.749,0,0,0,2.966,9h.068a.749.749,0,0,0,.748-.75V2.565l.889.852a.788.788,0,0,0,1.081,0l.024-.023a.712.712,0,0,0,0-1.037Z" transform="translate(6 0)" fill="#5c6a82" />
    </g>
  </svg>
);

const MoveIconComponent = props => <Button className="fwork-btn-icon" {...props}><Icon component={() => IconSvg(props.width, props.height)} /></Button>;

MoveIconComponent.propTypes = {
  type: PropTypes.string,
};

MoveIconComponent.defaultProps = {
  type: '',
};

export default MoveIconComponent;
