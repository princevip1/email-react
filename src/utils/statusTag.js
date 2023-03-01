import { Tag } from 'antd';
import React from 'react';

const StatusTag = ({ status }) => {
    return (
        <Tag color={status === 'completed' ? 'green' : status === 'pending' ? 'red' : 'blue'} key={status}>
            {status}
        </Tag>
    );
};

export default StatusTag;