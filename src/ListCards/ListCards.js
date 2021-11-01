import Card from "../Card/Card"
import { useEffect } from "react"

const ListCards = (props) => {
  
  return (
    <div>
      {props.listHeros.map((e) =>
        <Card key={e.id} id={e.id} name={e.name} cardWasChosen={props.cardWasChosen} setCardWasChosen={props.setCardWasChosen} />
      )}

    </div>
  )
}

export default ListCards