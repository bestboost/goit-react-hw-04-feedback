import PropTypes from 'prop-types';
import React from 'react';
import {Block, CallToAction} from 'components/Title/SectionTitle.styled';
import { Box } from '../Box';


export const Section = ({title, children}) => {
    
        return (
            
            <Box>
              <Block>
                 <CallToAction>{title}</CallToAction>
                 <Block>{children}</Block>
              </Block>
            </Box>

        );
    };

    Section.propTypes = {
            title: PropTypes.string.isRequired,
            children: PropTypes.array.isRequired
        };
    

export default Section;