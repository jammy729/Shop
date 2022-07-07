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
      <Container centerContent>
        <SimpleGrid columns={[2, 3, 4]}>
          {items.map(item => (
            <Box
              maxW='md'
              borderRadius='md'
              overflow='hidden'
              borderWidth='1px'
              key={item.id}
            >
              <Image src={item.image} />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    )
  }
}

export default ProductListing
