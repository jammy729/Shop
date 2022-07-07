import React, { useEffect } from 'react'

const ProductListing = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    async function getData () {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      )
      let actualData = await response.json()

      console.log(actualData)
    }
    getData()
  }, [])
  return <div>Product Listing</div>
}

export default ProductListing
