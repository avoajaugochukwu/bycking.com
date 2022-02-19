import React from 'react'

const CartTag = ({ type }) => {

  const getBackground = (type) => {
    switch(type) {
      case "1":
        return ["bg-blue-200", "text-blue-500", "Hot & new"]
      case "2":
        return ["bg-green-200", "text-green-900", "Updated recently"]
      case "3":
        return ["bg-yellow-400", "text-yellow-900", "Bestseller"]
      case "4":
        return ["bg-red-200", "text-red-500", "Fans favourite"]
      case "5":
        return ["bg-cyan-200", "text-cyan-700", "Value for money"]
      default:
        return ["bg-blue-200", "text-blue-500"]
    }
  }

  const [bgColor, textColor, text] = getBackground(type)

  return (
    <span className={`${bgColor} ${textColor} text-xs py-1 px-2 font-semibold`}>{text}</span>
  )
}

CartTag.defaultProps = {
  type: 1
}

export default CartTag