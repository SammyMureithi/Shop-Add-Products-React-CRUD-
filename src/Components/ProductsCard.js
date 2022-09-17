import React from 'react'

function ProductsCard(props) {
  return (
      <div id="product">
          <div id="desc">
          <h1>{`Products: ${props.title}`}</h1>
          <h1>{`Quantity: ${props.quantity}`}</h1>
          <h1>{`Price: ${props.price}`}</h1>
          </div>
          <div id="products-btn">
              <button id="update">Update</button>
              <button id="delete" onClick={props.handleDelete}>Delete</button>
          </div>
    </div>
  )
}

export default ProductsCard