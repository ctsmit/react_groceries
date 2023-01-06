import { useState } from "react"
import "./App.css"
import { Form } from "./components/Form"
import { List } from "./components/List"
import itemsArr from "./data"

function App() {
  const [grList, setGrList] = useState(itemsArr)//setting up and using state, state's initial value is the array of items

  const items = grList.map((item) => {
    return <>{!item.isPurchased && <List item={item} />}</> //item={item}=== {...item}
  })

  const addItem = (e) => {
    e.preventDefault()
    setGrList(
      grList.concat([
        {
          item: document.querySelector("input[name='item'").value,
          brand: document.querySelector("input[name='brand'").value,
          units: document.querySelector("input[name='units'").value,
          quantity: document.querySelector("input[name='quantity'").value,
          isPurchased: false,
        },
      ])
    )
  }

  return (
    <div className="App">
      <h1>My Grocery List</h1>
      <section>
        {items}
      </section>
      <h4>Add an item</h4>
      <Form onsubmit={addItem} />
    </div>
  )
}

export default App
