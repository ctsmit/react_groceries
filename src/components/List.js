export const List = ({item}) => {//{item} same as props kinda
  return (
    <div className="item-container">
      <p>{item.item}</p>
      <ul>
        <li>Brand: {item.brand}</li>
        <li>Units: {item.units}</li>
        <li>Quantity: {item.quantity}</li>
        <li>Purchased?: <input type="checkbox"></input></li>
      </ul>
    </div>
  )
}
