import { Box, Divider, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosHeartEmpty} from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { PhoneIcon, SearchIcon,ChevronDownIcon } from '@chakra-ui/icons'



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


                <Box  display="flex" border='1px' borderColor='yellow' w="100%" h="50px"  bg="#ffd91c" >
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14} ml={45} p={3}>All CATEGORIES</Text>
                  <ChevronDownIcon boxSize={6} mt={3}/>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>BOY FASHION</Text>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>GIRL FASHION</Text>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>FOOTWEAR</Text>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>TOY</Text>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>DIAPERING</Text>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>GEAR</Text>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>FEEDING</Text>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>BATH</Text>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>NURSERY</Text>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>MOMS</Text>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>HEALTH</Text>
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14}  p={3}>BOUTIQUES</Text>
                  {/* <img src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png" /> */}
                  <img src="https://cdn.fcglcdn.com/brainbees/banners/FC-menu-carters-logo.jpg"/>

                </Box>
            </Box>
        </div>
    )
}

export default Navbar