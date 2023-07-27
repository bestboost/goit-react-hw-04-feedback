// import PropTypes from 'prop-types';
import React from 'react';
import {NotificBox, NotificText} from './Notification.styled'

const Notification = ({message}) => {
    // static propTypes = {
    //     message: PropTypes.string.isRequired,
    // }

    // render () {

        return (
          <NotificBox>
            <NotificText>{message}</NotificText>
          </NotificBox>
        )
    };
// };

export default Notification;