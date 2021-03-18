import React, { useEffect, useState } from 'react';
import fetchAPI from '../../fetchAPI';
import { Avatar } from 'antd';
import moment from 'moment';

const Logs = ({ code }) => {
  const [logs, setLogs] = useState({});

  useEffect(() => {
    const FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
    const LOGGING_BACKEND = FWORK_API_ENDPOINT + '/logging';

    fetchAPI(`${LOGGING_BACKEND}/${code}`, 'GET').then(({ data: res }) => {
      if (!res.success || !res.data) {
        return;
      }
      setLogs(res.data);
    });
  }, []);

  const convertContent = (content) => {
    return typeof content === 'boolean' ? String(content) : content;
  };
  return (
    <div className="fwork-logs">
      {Object.keys(logs).map((key) => {
        return (
          <>
            <span>{key}</span>
            {logs[key].map(
              ({ actionType, data = [], user = {}, createdAt }) => {
                if (!Array.isArray(data)) {
                  data = [];
                }
                return (
                  <>
                    <div className="fwork-logs-item">
                      <span>{moment(createdAt).format('hh:mm')}</span>
                      <div className="user-infor">
                        <Avatar src={user.avatar} size={24}>
                          {user.fullName}
                        </Avatar>
                        <span>{user.username}</span>
                      </div>
                      <div className="content">
                        {actionType !== 2
                          ? actionType === 1
                            ? 'created'
                            : 'deleted'
                          : data.map((el, index) => {
                            return (
                              <div key={index} className="content-item">
                                <span>{el.field}: </span>
                                <div className="pre-data">
                                  {convertContent(el.preData)}
                                </div>
                                <div className="next-data">
                                  {convertContent(el.nextData)}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </>
                );
              }
            )}
          </>
        );
      })}
    </div>
  );
};

export default Logs;
