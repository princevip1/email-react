import { Typography } from 'antd';
import moment from 'moment-timezone';
import React, { useState } from 'react'
const { Text } = Typography

const Clock = ({ theme }) => {
    let time = moment.tz(new Date(), "Asia/Dhaka").format('hh:mm:ss A');
    let [ctime, setCTime] = useState();
    const updateTime = () => {
        time = moment.tz(new Date(), "Asia/Dhaka").format('hh:mm:ss A');
        setCTime(time);
    }
    setInterval(updateTime, 1000);
    return <Text> {ctime} (Dhaka)</Text>
}
export default Clock;