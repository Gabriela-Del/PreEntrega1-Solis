import React, {useState} from 'react';

const CartWidget = () => {

    const [cont, setCont] = useState(0)

    const sumar = () => setCont (cont+1)
  return (
    <button onClick={sumar} type="button" className="btn btn-success mx-2">
       <i className="bi bi-cart-check"></i>
       <spam className="mx-2">{cont}</spam> 
    </button>
    
  )
}

export default CartWidget