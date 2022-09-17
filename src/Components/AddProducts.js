import React, { useState } from 'react'
import ProductsCard from './ProductsCard';

function AddProducts() {
    const myProducts = [
        { id: 1, name: "Obama Smoothe", quantity: "10", price: "20" },
        { id: 2, name: "Obama", quantity: "100", price: "120" },
        { id: 3, name: "Smoothe", quantity: "70", price: "54" },
    ]
    const [products, setProducts] = useState(myProducts);
    const [productName, setProductName] = useState();
    const [price, SetPrice] = useState();
    const [quantity, setQuantity] = useState();
  
    function AddnewProduct( e ) {
        e.preventDefault();
        let newPro = {
            id:products.length+1,
            name: productName,
            price: price,
            quantity: quantity
        }
        let newProductList = [...products, newPro]
        console.log( newPro );
        setProducts( newProductList );
        setProductName( "" );
        setQuantity( "" );
        SetPrice( "" );
    }
    function handleChange( e ) {
        if ( e.target.name === "productName" ) {
            setProductName( e.target.value );
        }
        if ( e.target.name === "quantity" ) {
            setQuantity( e.target.value );
        }
        if ( e.target.name === "price" ) {
            SetPrice( e.target.value );
        }
    }
    const prod = products.map( element => {
      return   <ProductsCard title={element.name} price={element.price} quantity={element.quantity} handleDelete={()=>handleDelete(element.id)} />
    } )
    function handleDelete( id ) {
        const afterDelete = products.filter( produce => produce.id !== id );
        setProducts( afterDelete );
    }
  return (
      <div>
          <form>
              <h1>Add Products</h1>
              <label htmlFor='productName'>Product Name</label>
              <input type="text" id='productName' name='productName'
                  value={productName} placeholder="Enter Product Name..." onChange={handleChange}/>
              <label htmlFor='quantity'>Quantity</label>
              <input type="number" id='quantity' name='quantity' placeholder="Enter Quantity..."
                  onChange={handleChange} value={quantity} />
              <label htmlFor='price'>Price</label>
              <input type="text" id='price' name='price'
                  placeholder="Enter Price..." onChange={handleChange} value={price} />
              <button type='submit' onClick={AddnewProduct}>Add Product</button>
              <h1>Total:::{products.reduce((total,currentElement)=> total+=currentElement.price*currentElement.quantity,0)}</h1>
          </form>
          <div id='purchase'>
          {prod}
          </div>
          
    </div>
  )
}

export default AddProducts