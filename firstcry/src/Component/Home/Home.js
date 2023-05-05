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
                    name="Innumerable Fashion Choices | 2-8Y"

                />


                <Cards

                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29758.jpg"
                    name="Baby Basics | Up To 24M"
                />
                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29760.jpg"
                    name=" Summer wedding Collection"

                />
                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29763.jpg"
                    name="Toys To Keep You Company"

                />
                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29759.jpg"
                    name="Premium & Latest Styles"

                />
                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29762.jpg"
                    name="The Magic Of Ethnic Fashion | Up To 14Y"

                />
                <Cards
                    img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29750.jpg"
                    name="Ramp Up Your Wardrobe"

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
            <div className={styles.box}>
               <h1 style={{fontFamily:"550px",padding:"32px"}}> View All Botiques</h1>
            </div>
            </Box>
        </div>
    )
}

export default Home