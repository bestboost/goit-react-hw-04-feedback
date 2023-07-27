import PropTypes from 'prop-types';
import React from 'react';
import {NotificBox, NotificText} from './Notification.styled'

const Notification = ({message}) => {
  
        return (
          <NotificBox>
            <NotificText>{message}</NotificText>
          </NotificBox>
        )
    };

     Notification.propTypes = {
        message: PropTypes.string.isRequired,
    }

export default Notification;