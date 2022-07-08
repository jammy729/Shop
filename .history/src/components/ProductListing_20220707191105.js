import React, { useEffect, useState } from 'react'
import {
  Container,
  Text,
  Heading,
  Box,
  Center,
  SimpleGrid,
  Image,
  Spinner,
  Progress
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'

const ProductListing = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [mobile] = useMediaQuery('(min-width: 1280px)')

  useEffect(() => {

    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=8')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true)
          setItems(result)
        },
        error => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return (
      <Container centerContent>
        <Text fontWeight='semibold'> Error: {error.message}</Text>
      </Container>
    )
  } else if (!isLoaded) {
    return (
      <Container centerContent>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          boxSize={60}
        />
        Loading
      </Container>
    )
  } else {
    return (
      <Container centerContent maxW={!mobile ? '100vw' : '100vw'}>
        <SimpleGrid columns={!mobile ? '2' : '3'}>
          {items.map(item => (
            <Box
              maxW='100%'
              overflow='hidden'
              borderWidth='1px'
              key={item.id}
              m={2}
            >
              <Image w='100%' src={item.images} objectFit='cover' bg='blue' />

              <Box pb={8} px={3}>
                <Box display='flex'>
                  <Box mt='1' fontWeight='semibold'>
                    <Text fontWeight='normal'>{item.title}</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    )
  }
}

export default ProductListing
