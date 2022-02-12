import Link from 'next/link'
import React from 'react'
import { currency } from '../../utils'

const CheckoutSection = ({ totalAmount }) => {
  return (
    <>
      <p className="text-gray-600">Total:</p>
      <h2 className="mt-4 text-4xl font-bold text-cyan-500">{currency(totalAmount)}</h2>

      <div className="px-8 mb-8 py-3 bg-cyan-500 text-white mt-4 w-4/5 text-center hover:bg-cyan-600 cursor-pointer">
        <Link href='/cart/checkout'>
          Checkout
        </Link>
      </div>
    </>
    
  )
}

export default CheckoutSection