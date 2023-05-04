
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Cards({img,name}) {
  return (
    <div>
       <Card width="30%" height="495px">
  <CardBody>
    <Image
      src='https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29757.jpg'
      alt='img'
      borderRadius='lg'
     
    />
    <Stack mt='6' spacing='3'  alignItems='start' ml={5} font-family="RobotoL"  
    fontWeight="350"  >
      <Text  size='small'> Innumerable Fashion Choices | 2-8Y</Text>
      </Stack>
      <Box display={'flex'}  >
      <Text fontSize="14"
      ml={5}
      color="grey"
      font-family="RobotoL" 
      fontWeight="350"
      
      >
       Tops,Tees,Sets & More
      </Text>
      <Text ml={130} color="red" fontSize={14}>NEW TODAY</Text>
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