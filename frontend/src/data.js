import image1 from "./assets/product1.jpg"
import image2 from "./assets/product2.jpg"
import image3 from "./assets/product3.jpg"
import image4 from "./assets/product4.jpg"
import image5 from "./assets/product5.jpg"

const data = {
  products: [
    {
      id: '1', 
      name: 'plain black t-shirt',
      price: '20,99',
      image: image1,
      rating: 5, // 'user' rating 1-5
      description: 'This is a description of a product'
    },
    {
      id: '2',
      name: 'black suit',
      price: 50,
      image: image2,
      rating: 5,
      description: 'This is a description of a product'
    },
    {
      id: '3',
      name: 'white t-shirt',
      price: 50,
      image: image3,
      rating: 5,
      description: 'This is a description of a product'
    },
    {
      id: '4',
      name: 'light blue shirt',
      price: 50,
      image: image4,
      rating: 5,
      description: 'This is a description of a product'
    },
    {
      id: '5',
      name: 'some shorts',
      price: 50,
      image: image5,
      rating: 5,
      description: 'This is a description of a product'
    }
  ]
}

export default data