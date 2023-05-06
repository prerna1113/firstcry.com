import React from 'react'
import Cards from './Cards'
import { Box } from '@chakra-ui/react'
import styles from './card.module.css';

function Home(props) {
    return (
        <div>
            {/* bg="azure" */}
            <Box  bg="gainsboro">
            <h1 style={{padding:"20px", fontSize:"22px", fontWeight:"550px" ,color:"#575757"}}>PREMIUM BOUTIQUES</h1>
            <Box className={styles.card} >
                
                <Cards border="1px" borderColor="red"
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29757.jpg"
                    alt=""
                    name="Innumerable Fashion Choices | 2-8Y"

                />


                <Cards

                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29758.jpg"
                    alt=""
                    name="Baby Basics | Up To 24M"
                />
                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29760.jpg"
                    alt=""
                    name=" Summer wedding Collection"

                />
                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29763.jpg"
                    name="Toys To Keep You Company"
                    alt=""

                />
                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29759.jpg"
                    name="Premium & Latest Styles"
                    alt=""

                />
                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29762.jpg"
                    name="The Magic Of Ethnic Fashion | Up To 14Y"
                    alt=""

                />
                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29750.jpg"
                    name="Ramp Up Your Wardrobe"
                    alt=""

                />
                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29753.jpg"
                    name="Bottoms Up | Up To 14Y"
                />

                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29752.jpg"
                    name="Ethnic & Fun At The Same Time |2-14Y "
                />

                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29756.jpg"
                    name="Fun & Learn"
                />

                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29754.jpg"
                    name="The Topwear Store | Up To 14Y"
                />

                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29755.jpg"
                    name="Where Sustainability Meets Style "
                />
            

            </Box>
            <div className={styles.box} >
               <h1 style={{fontFamily:"550px",padding:"10px"}}> View All Botiques</h1>
            </div>
            <Box className={styles.scndCard} >
                <Box className={styles.teddy}>
                    <img  style={{borderRadius:"4px"}} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_31.jpg"  alt=""/>
                </Box>
                <Box className={styles.thirdCard}>
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_32.jpg" alt=""/>
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_33.jpg"  alt=""/>
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_34.jpg" alt=""/>
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_35.jpg" alt=""/>
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_36.jpg" alt=""/>
                </Box>

               
                <Box className={styles.forthCard}>
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_37.jpg" alt=""/>
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_38.jpg"  alt=""/>
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_39.jpg" alt=""/>
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_40.jpg" alt=""/>
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_41.jpg" alt=""/>
                </Box>

                <Box className={styles.fifthCard}>
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_01.jpg" alt=""  />
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_02.jpg" alt=""  />
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_03.jpg"  alt=""  />
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_04.jpg"  alt=""  />
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_05.jpg"  alt=""   />
                    <img  className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_06.jpg"  alt=""   />
                </Box>

                <Box className={styles.sixCard} >
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_07.jpg" alt="" />
                </Box>
                <Box className={styles.sixthCard}>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_08.jpg" alt=""/>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_09.jpg"  alt=""/>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_10.jpg" alt=""/>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_11.jpg" alt=""/>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_12.jpg" alt=""/>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_13.jpg" alt=""/>
                </Box>
                <Box className={styles.sixthCard}>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_14.jpg"  alt=""/>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_15.jpg"  alt=""/>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_16.jpg" alt=""/>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_17.jpg" alt=""/>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_182.jpg" alt=""/>
                    <img  className={styles.imgOne} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_19.jpg" alt=""/>
                </Box>
                <Box className={styles.seventhCard}>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_01.jpg"  alt=""/>
                </Box>
            </Box>
            </Box>

            
            

           
        </div>
    )
}

export default Home