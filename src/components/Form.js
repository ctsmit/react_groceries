
export const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.onsubmit}>
        <label for="item">Item: </label>
        <input type="text" name="item"></input><br />
        <label for="brand">Brand: </label>
        <input type="text" name="brand"></input><br/>
        <label for="units">Units: </label>
        <input type="text" name="units"></input><br/>
        <label for="quantity">Quantity: </label>
        <input type="text" name="quantity"></input><br/>
        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  )
}

