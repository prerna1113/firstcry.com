
import { Box, Text } from '@chakra-ui/react'
import React from 'react';
import styles from './footer.module.css';
import { AiOutlineStar } from 'react-icons/ai';
import { HiRefresh } from 'react-icons/hi';
import { FaTruck } from 'react-icons/fa';




function Footer() {
  return (
    <div>
        <Box className={styles.firstFooter}> 
            <Box >
                <Text id={styles.scndFooter} >big store for little ones</Text>
            </Box>

            <Box display="flex" textDecorationColor={"none"} marginLeft="18%">
            <AiOutlineStar size="5%" color='aqua'   />
                <img  style={{width:"8%",marginTop:"3px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDYCGs7sQFVgen8Z6nDEAZOUjuoOpzBwydC9Vdsxi7U0ePeJO"/>
                <img  style={{width:"4%"}}src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCzV5al50j0-GKbOX-mlp6B28hEn_yhjpEDFndBy7ExoeBmEf0"/>
               < HiRefresh size="5%" color='aqua' />
               <FaTruck  size="4%" color='aqua'/>
            </Box>
        </Box>
    </div>
  )
}

export default Footer