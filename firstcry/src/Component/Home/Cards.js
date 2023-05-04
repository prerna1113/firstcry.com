
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Cards({
  img="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29757.jpg",
  name="Innumerable Fashion Choices | 2-8Y"

}) {
  return (
    <div>
       <Card height="490px"
  
       width="410px">
  <CardBody>
    <Image
      src={img}
      alt='img'
      borderRadius='lg'
     
    />
    <Stack mt='6' spacing='3'  alignItems='start' font-family="RobotoL"  
    fontWeight="350"  >
      <Text  size='small' ml={1}>{name} </Text>
      </Stack>
      
      
      <Box display={'flex'}  >
      <Text fontSize="14"
      
      color="grey"
      font-family="RobotoL" 
      fontWeight="350"
      
      >
       Tops,Tees,Sets 
      </Text>
      
      <Text ml={130} color="red" fontSize={13}>NEW TODAY</Text>
      </Box>
     
      <Text></Text>
      
    
  </CardBody>
  
  <CardFooter>
   
  </CardFooter>
</Card>
    </div>
  )
}

export default Cards