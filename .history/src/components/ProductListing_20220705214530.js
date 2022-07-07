import React, { useEffect } from 'react'

const ProductListing = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded
            }
        )
  }, [])
  return <div>Product Listing</div>
}

export default ProductListing
