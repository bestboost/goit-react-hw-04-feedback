import React from 'react';
import {Buttons, ChooseButton} from './FeedbackOptions.styled';
// import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  // static propTypes = {
  //   options: PropTypes.arrayOf(
  //     PropTypes.string),
  //   onLeaveFeedback: PropTypes.func.isRequired,
  // }

  // static defaultProps = [];

  // state = {
  //   options: this.props.options,
  //   onLeaveFeedback: this.props.onLeaveFeedback,
  // }


  // render () {

    return (
      <Buttons>
        {options.map(option => (
          <ChooseButton key={option} 
              type="button" 
              onClick={ (e) => onLeaveFeedback(option)}>
                {option}
          </ChooseButton>
         ))}
    </Buttons> 
    )
  }
// }

export default FeedbackOptions;