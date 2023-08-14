import React from 'react'
import { Container } from 'react-bootstrap'
import SubTitle from '../../components/Utilities/SubTitle/SubTitle'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod'

const PaymentMethodPage = () => {
  return (
    <section className='pageStyle'>
      <Container>
        <SubTitle title="إختر طريقه الدفع"/>
        <PaymentMethod/>
      </Container>
    </section>
  )
}

export default PaymentMethodPage
