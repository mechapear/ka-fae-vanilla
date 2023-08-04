const productList = [
  {
    id: '1',
    name: 'Signature Blends',
    price: 20,
    image: 'coffee-signature.png',
  },
  {
    id: '2',
    name: 'Ethiopian Blends',
    price: 18,
    image: 'coffee-ethiopia.png',
  },
  {
    id: '3',
    name: 'Colombian Blends',
    price: 18,
    image: 'coffee-colombia.png',
  },
  {
    id: '4',
    name: 'Kenya Blends',
    price: 18,
    image: 'coffee-kenya.png',
  },
]

// convert array of productList to object and use id to be a key of this new object - easy access
const productItemsById = {}
for (const product of productList) {
  productItemsById[product.id] = product
}
