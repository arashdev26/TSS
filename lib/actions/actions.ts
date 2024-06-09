export const getCollections = async () => {
  const collections = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections`,
    { next: { revalidate: 10 } }
  )
  return await collections.json()
}

export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`,
    { next: { revalidate: 10 } }
  )
  return await collection.json()
}

export const getProducts = async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    next: { revalidate: 10 },
  })
  return await products.json()
}

export const getProductDetails = async (productId: string) => {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
    { next: { revalidate: 10 } }
  )
  return await product.json()
}

export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search/${query}`,
    { cache: 'no-store' }
  )
  return await searchedProducts.json()
}

export const getOrders = async (customerId: string) => {
  const orders = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`,
    { next: { revalidate: 2 } }
  )
  return await orders.json()
}

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`,
    { next: { revalidate: 60 } }
  )
  return await relatedProducts.json()
}
