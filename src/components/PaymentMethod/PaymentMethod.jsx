import React from 'react';
import PriceComp from '../Utilities/PriceComp/PriceComp';

const PaymentMethod = () => {
  return (
    <section className='payment'>
    <div className='payment-methods'>
      <div>
        <input type="radio" name="payment" value="credit"/>
        <p>الدفع عن طريق البطاقه الإئتمانيه</p>
      </div>
      <div>
        <input type="radio" name="payment" value="cash"/>
        <p>الدفع عند الإستلام</p>
      </div>
    </div>
    <div className='payment-method-footer'>
        <PriceComp/>
        <button className='btn'>إتمام الشراء</button>
    </div>
    
    </section>
  )
}

export default PaymentMethod
