import { Box, Divider, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosHeartEmpty} from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { PhoneIcon, SearchIcon } from '@chakra-ui/icons'



function Navbar() {
    return (
        <div>
            <Box>
                <Box display="flex"  mt={17}>

                    <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" style={{marginLeft:"55px"}}   />

                    <InputGroup>
                        <InputRightElement
                            pointerEvents='none'
                            width="83%"
                            color="#ff943d"
                            children={<SearchIcon />}


                        />
                        <Input placeholder='Search for a Category,Brand or Product' width="60%" height="34" border="1px solid  #ff943d" fontSize={14}   ml={2}/>
                    </InputGroup>
                    {/* <MdOutlineLocationOn  size={40}/> */}

                    <Text fontSize={11} font-family="RobotoL" fontWeight="400">Select Location</Text>
                    <Stack direction='row' h='30px' p={0.5}>
                        <Divider orientation='vertical' />
                        <Text fontSize={11} fontWeight="400">Stores&PreSchool</Text>
                    </Stack>

                   
                    <Stack direction='row' h='30px' p={0.5}>
                        <Divider orientation='vertical' />
                        <Text fontSize={11} fontWeight="400">Support</Text>
                    </Stack>

                    <Stack direction='row' h='30px' p={0.5}>
                        <Divider orientation='vertical' />
                        <Text fontSize={11} fontWeight="400">TrackOrder</Text>
                    </Stack>

                    <Stack direction='row' h='30px' p={0.5}>
                        <Divider orientation='vertical' />
                        <Text fontSize={11} fontWeight="400">FirstcryParenting</Text>
                    </Stack>

                    <Stack direction='row' h='30px' p={0.5}>
                        <Divider orientation='vertical' />
                        <Text fontSize={11} fontWeight="400">Login/Register</Text>
                    </Stack>

                    <Stack direction='row' h='30px' p={0.5}>
                        <Divider orientation='vertical' />
                     <IoIosHeartEmpty />
                        <Text fontSize={11} fontWeight="400">Shortlist</Text>
                    </Stack>

                    <Stack direction='row' h='30px' p={0.5}>
                        <Divider orientation='vertical' />
                    
                        <Text fontSize={11} fontWeight="400">Shortlist</Text>
                    </Stack>

                    <Stack direction='row' h='30px' p={0.5} mr={10} >
                        <Divider orientation='vertical'  />
                    
                        <BsCartPlus size={35} />
                        <Text fontSize={15} fontWeight="400" >Cart</Text>

                    </Stack>




                </Box>


                <Box  >






                </Box>
            </Box>
        </div>
    )
}

export default Navbar