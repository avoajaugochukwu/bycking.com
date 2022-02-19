import Address from "./Address"
import PaymentMethods from "./PaymentMethods"


const CheckoutSection = ({ cart }) => {
  // console.log(cart)
  return (
    <div className="w-3/5">
      {/* <Address /> */}
      <PaymentMethods />
    </div>
  )
}

export default CheckoutSection