// import PropTypes from 'prop-types';
import React from 'react';
import {Block, CallToAction} from 'components/Title/SectionTitle.styled';
import { Box } from '../Box';


export default function Section ({title, children}) {
    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     children: PropTypes.array.isRequired
    // };

    // state = {
    //     title: this.props.title,
    // }

   
    // render () {

        return (
            
            <Box>
              <Block>
                 <CallToAction>{title}</CallToAction>
                 <Block>{children}</Block>
              </Block>
            </Box>

        );
    };
// };

// export default Section;