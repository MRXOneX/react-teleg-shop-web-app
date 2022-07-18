// components/UI
import Button from '../UI/Button'
//
import './Cart.css'


const Cart = ({ cartItems, onCheckout }) => {
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)


    return (
        <div className='cart__container'>
            <br /> 
            <span>Total Price: ${totalPrice.toFixed(2)}</span>
            <Button 
                title={`${cartItems.length === 0 ? 'Order !' : 'Checkout'}`}
                type='checkout'
                disable={cartItems.length === 0 ? true : false}
                onClick={onCheckout}
            />
        </div>
    )
}


export default Cart