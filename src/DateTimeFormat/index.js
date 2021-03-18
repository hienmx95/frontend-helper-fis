import React from 'react';
import moment from 'moment-timezone';
import {connect} from 'react-redux';

class DateTimeFormat extends React.Component {
  getDatetime(props) {
    let { date, tz, authUser } = props;

    if (!authUser.setting) {
      return null;
    }

    date = date || props.children;
    tz = tz || authUser.setting.timeZone;

    let datetime = moment(date);
    if (tz) {
      datetime = datetime.tz(tz);
    }
    return datetime;
  }

  componentDidMount() {
    this.getContent()
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.getContent();
  }

  getContent = () => {
    let props = this.props;
    let { format, authUser, ago, time } = props;
    if (!authUser.setting) {
      return null;
    }
    let datetime = this.getDatetime(props);
    let content;
    let formatSetting = authUser.setting.dateFormat;
    if (time) {
      formatSetting = `${authUser.setting.dateFormat} ${authUser.setting.timeFormat}`;
    }
    format = format || formatSetting;
    if (ago) {
      content = this.getTimeAgo(datetime, format);
    } else {
      content = datetime.format(format)
    }
    this.setState({
      content
    })
  };

  getTimeAgo(datetime, format) {
    let diffHours = moment().diff(datetime, 'h');
    if (diffHours > 23) {
      return datetime.format(format);
    }
    if (diffHours > 0) {
      return `${diffHours} giờ trước`;
    }
    let diffMinutes = moment().diff(datetime, 'm');
    if (diffMinutes > 0) {
      return `${diffMinutes} phút trước`;
    }
    return `Vừa xong`
  }

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }



  render() {
    const { content } = this.state;

    return (
      <time>{content}</time>
    );
  }
}

function mapStateToProps(state) {
  const {authUser} = state;
  return {
    authUser
  };
}

export default connect(mapStateToProps, null)(DateTimeFormat);

