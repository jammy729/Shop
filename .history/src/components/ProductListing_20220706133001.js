import React, { useEffect, useState } from 'react'
import {
  Container,
  Text,
  Heading,
  Box,
  Center,
  SimpleGrid,
  Image
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'

const ProductListing = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
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
    return <Container centerContent>Loading...</Container>
  } else {
    return (
      <Container centerContent maxW='100vw'>
        <SimpleGrid columns={[2, null, 3]}>
          {items.map(item => (
            <Box
              borderRadius='lg'
              overflow='hidden'
              borderWidth='1px'
              key={item.id}
              m={4}
              bg='green'
            >
              <Image
                boxSize='sm'
                borderRadius='lg'
                src={item.image}
                objectFit='fill'
              />

              <Box p={6}>
                <Box display='flex' alignItems='baseline'>
                  <Box mt='1' fontWeight='semibold'>
                    {item.title}
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
