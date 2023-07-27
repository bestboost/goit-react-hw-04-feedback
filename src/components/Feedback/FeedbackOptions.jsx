import React from 'react';
import {Buttons, ChooseButton} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
      <Buttons>
        {options.map(option => (
          <ChooseButton key={option} 
              type="button" 
              onClick={ () => onLeaveFeedback(option)}>
                {option}
          </ChooseButton>
         ))}
    </Buttons> 
    )
  };

 FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
  } 

export default FeedbackOptions;