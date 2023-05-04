import { Box, Divider, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosHeartEmpty} from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { PhoneIcon, SearchIcon,ChevronDownIcon } from '@chakra-ui/icons'
import  styles from "./nav.module.css";




function Navbar() {

   

    return (
        <div>
            <Box>
                <Box display="flex"  mt={17}>

                    <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" style={{marginLeft:"55px"}}   />

                    <InputGroup>
                        <InputRightElement
                            pointerEvents='none'
                            width="63%"
                            color="#ff943d"
                            children={<SearchIcon />}


                        />
                        <Input placeholder='Search for a Category,Brand or Product' width="70%" height="34" border="1px solid  #ff943d" fontSize={14}   ml={2}/>
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


                <Box className={styles.mydiv} display="flex" border='1px' borderColor='yellow' w="100%" h="50px"  bg="#ffd91c" mt={1} >
                  <Text  font-family="RobotoL"  fontWeight="450" fontSize={14} ml={45} p={3}>All CATEGORIES </Text>
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
                  {/* <img src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo_small.png"  width="10px"/> */}
                  <img src="https://cdn.fcglcdn.com/brainbees/banners/FC-menu-carters-logo.jpg"/>

                </Box>
            

            <Box className={styles.frst} >
                <Box className={styles.ffrst}>
                    <Box  className={styles.first}  border='1px' borderColor='gray.200' alignItems={'center'} w="18%" p={2} 
                    fontWeight={500}
                    bg="gray.50"
                    
                    mb={3}
                    
                     textAlign={[ 'left']} fontSize={14}>

                      <Text  >ALL CATEGORIES</Text>
                       <h4 textAlign="center">BOYS FASHION</h4>
                       <h4>GIRLS FASHION</h4>
                       <h4>FOOTWEAR</h4>
                       <h4 >TOYS</h4>
                       <h4>DIAPERING</h4>
                       <h4>GEAR</h4>
                       <h4>FEEDING</h4>
                       <h4>BATH</h4>
                       <h4>NURSERY</h4>
                       <h4>MOMS</h4>
                       <h4>HEALTH & SAFTEY</h4>
                       <h4>BOUTIQUES</h4>
                       <h4>WOMENS'S BEAUTY & CARE</h4>
                       <h4>BIRTHDAY'S & GIFTS</h4>
                       <h4>CD'S & </h4>
                       <h4>SCHOOL SUPPLIES</h4>
                       <h4>OFFERS</h4>
                       <h4>STORES & PRESCHOOLS</h4>
                       <img src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo_small.png" marginTop="2px"/>
                       <img src="https://cdn.fcglcdn.com/brainbees/banners/new_menu_carters.png" marginTop="5px"/>
                       <img src="https://cdn.fcglcdn.com/brainbees/images/n/Intelli%20Education%20Logo%20360.png" marginTop="5px"/>
                       <h4>PRESCHOOL ADDMISSIONS</h4>

                    </Box>
                    <Box className={styles.scroll}>
                        <hr></hr>

                    <Box className= {styles.scnd}>
                        <Text>SHOP BY CATEGORY</Text>
                        <Text>Sets & suits New</Text>
                        <Text>T-shirts New</Text>
                        <Text>Shorts New</Text>
                        <Text>Nightwear</Text>
                        <Text>Jeans & Trousers</Text>
                        <Text>Onesies & Rompers</Text>
                        <Text>Shirts New</Text>
                        <Text>Party Wear</Text>
                        <Text>Pajamas & Joggers</Text>
                        <Text>Ethnic Wear</Text>
                        <Text>Inner Wear</Text>
                        <Text>Caps & Gloves</Text>
                        <Text>Bath Time</Text>
                        <Text>Swim Wear</Text>
                        <Text>Athleisure & Soprtswear</Text>
                        <Text>Sweatshirts</Text>
                        <Text>Jackets</Text>
                        <Text>Sweaters</Text>
                        <Text>Thermals</Text>
                        <Text>Socks</Text>
                        <Text>Rainwear</Text>
                        <Text>Theme Costumes</Text>
                        <Text>View All</Text>
                        


                    </Box>
                    <Box className={styles.third}>
                        <Text>SHOP BY COLLECTION</Text>
                        <Text>Splash in Summer</Text>
                        <Text>Bestsellers</Text>
                        <Text>Multi-packs</Text>
                        <Text>Baby Essentials</Text>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <Text>FASHION ACCESSORIES</Text>
                        <Text>Sunglasses New</Text>
                        <Text>Summer Caps New</Text>
                        <Text>Watches</Text>
                        <Text>Ties,Belts,Sunpenders</Text>
                        <Text>Bags</Text>
                        <Text>Kids Umberellas</Text>
                       <br></br>
                        <hr></hr>
                        <br></br>
                        <Text>FOOTWEAR</Text>
                        <Text>Clogs New</Text>
                        <Text>Flip Flops New</Text>
                        <Text>Sandals New</Text>
                        <Text>Casuals New</Text>
                        <Text>Formal & Partywear</Text>

                        <Text>Booties</Text>
                        <Text>Sneakers & Sports Shoes</Text>
                        <br></br>
                        <hr></hr>
                        <br></br>


                    </Box >

                    <Box className={styles.forth}>
                        <Text>SHOP BY AGE</Text>
                        <Text>Preemie/Tine Preemie</Text>
                        <Text>New Born(0-3)</Text>
                        <Text>3-6 Months</Text>
                        <Text>6-9 Months</Text>
                        <Text>9-12 Months</Text>
                        <Text>12-18 Months</Text>
                        <Text>18-24 Months</Text>
                        <Text>2 to 4 Years</Text>
                        <Text>4 to 6 Years</Text>
                        <Text>6 to 8 Years</Text>
                        <Text>8+ Years</Text>
                       <br></br>
                        <hr></hr>
                        <br></br>
                        <Text>SHOP BY PRICE</Text>
                        <Text>All Under 199</Text>
                        <Text> All Under 299</Text>
                        <Text>All Under 399</Text>
                        <Text>All Under 499</Text>
                       <br></br>
                        <hr></hr>
                        <br></br>
                        <Text>SHOP BY BRANDS</Text>

                        <Text>Babyhug</Text>
                        <Text>Babyoye</Text>
                        <Text>Kookie Kids</Text>
                        <Text> Carter's</Text>
                        <Text>Pine Kids</Text>
                        <Text>Cute Walk</Text>
                        <Text>Honeyhap</Text>
                        <Text>OLLINGSTON ST.</Text>
                        <Text>Doodle Poodle</Text>
                        <Text>Primo Gino</Text>
                        <Text>Mark & Mia</Text>
                        <Text>Bonfino</Text>
                        <Text>Earthy Touch</Text>
                        <Text>Arias By Lara Dutta</Text>
                        <Text> Pine Active</Text>
                        <Text> ToffyHouse</Text>
                        <Text>Ed-a-mamma</Text>
                        <Text>UCB</Text>
                        <Text>U.S.Polo Ass.Kids</Text>
                        <Text>Monte Carlo</Text>
                        <Text>Gini & Jony</Text>
                        <Text>Puma</Text>
                        <Text>Tommy Hilgfiger</Text>
                        <Text>ADIDAS KIDS</Text>
                        <Text>RUFF</Text>

                        


                    </Box>
                    <Box className={styles.fifth}>
                        <img  style={{marginTop:"18px",width:"85%"}} src="https://cdn.fcglcdn.com/brainbees/images/n/rhs_splash_in_summer_26042023_02.jpg" />
                    </Box>
                    </Box>

                  </Box>
                  </Box>
                  </Box>
        </div>
    )
}

export default Navbar