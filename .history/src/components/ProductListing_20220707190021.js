// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import {
//   Container,
//   Text,
//   Heading,
//   Box,
//   Center,
//   SimpleGrid,
//   Image,
//   Spinner,
//   Progress
// } from '@chakra-ui/react'
// import { useMediaQuery } from '@chakra-ui/react'

// const ProductListing = () => {
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [data, setData] = useState(null)
//   const [mobile] = useMediaQuery('(min-width: 1280px)')

//   // useEffect(() => {
//   //   fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=8')
//   //     .then(res => res.json())
//   //     .then(
//   //       result => {
//   //         setIsLoaded(true)
//   //         setItems(result)

//   //       },
//   //       error => {
//   //         setIsLoaded(true)
//   //         setError(error)
//   //       }
//   //     )
//   // }, [])

//   useEffect(() => {
//     setLoading(true)
//     axios({
//       method: 'get',
//       baseURL: 'https://www.fakeshop-api.com/',
//       url: '/products/getProduct/10'
//     })
//       .then(({ data }) => {
//         setData(data.products)
//       })
//       .catch(err => console.dir(err))
//       .finally(() => setLoading(false))
//   }, [])

//   // if (error) {
//   //   return (
//   //     <Container centerContent>
//   //       <Text fontWeight='semibold'> Error: {error.message}</Text>
//   //     </Container>
//   //   )
//   // } else if (!loading) {
//   //   return (
//   //     <Container centerContent>
//   //       <Spinner
//   //         thickness='4px'
//   //         speed='0.65s'
//   //         emptyColor='gray.200'
//   //         color='blue.500'
//   //         boxSize={60}
//   //       />
//   //       Loading
//   //     </Container>
//   //   )
//   // } else {
//   return (
//     <section>
//       <h1>Fake Shop API response:</h1>
//       {loading && 'Loading...'}
//       {!!data && data.length > 0 ? (
//         data.map(product => {
//           return (
//             <article key={product.data._id}>
//               <h2>name: {product.data.title}</h2>
//             </article>
//           )
//         })
//       ) : (
//         <p>API did not provided any product, try again.</p>
//       )}
//     </section>
//     // <Container centerContent maxW={!mobile ? '100vw' : '70vw'}>
//     //   <SimpleGrid columns={!mobile ? '2' : '3'}>
//     //     {!!data && data.length > 0 ? (
//     //       data.map(product => {
//     //         return (
//     //           <article key={product.id}>
//     //             <h2>name: {product.name}</h2>
//     //             <p>id: {product.id}</p>
//     //             <p>description: {product.description}</p>
//     //             <p>brand: {product.brand}</p>
//     //             <p>price: {product.price}</p>
//     //             <p>category: {product.category}</p>
//     //           </article>
//     //         )
//     //       })
//     //     ) : (
//     //       <p>API did not provided any product, try again.</p>
//     //     )}
//     //     {/* {data.map(product => (
//     //         <Box
//     //           maxW='100%'
//     //           overflow='hidden'
//     //           borderWidth='1px'
//     //           key={product.id}
//     //           m={2}
//     //         >
//     //           <Image w='100%' src={product.name} objectFit='cover' bg='blue' />

//     //           <Box p={6} bg='green'>
//     //             <Box display='flex'>
//     //               <Box mt='1' fontWeight='semibold'>
//     //                 <Text>{product.price}</Text>
//     //               </Box>
//     //             </Box>
//     //           </Box>
//     //         </Box>
//     //       ))} */}
//     //   </SimpleGrid>
//     // </Container>
//   )
// }

// export default ProductListing

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App () {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'get',
      baseURL: 'http://fakestoreapi.com',
      url: '/products?limit=5'
    })
      .then(({ data }) => {
        setData(data.products)
      })
      .catch(err => console.dir(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section>
      <h1>Fake Shop API response:</h1>
      {loading && 'Loading...'}
      {!!data && data.length > 0 ? (
        data.map(product => {
          return (
            <article key={product.id}>
              <h2>name: {product.title}</h2>
              <p>id: {product.price}</p>
            </article>
          )
        })
      )

    </section>
  )
}

export default App
