import './Card.scss'


const Card = (props) => {
  const handleClick =(id)=>{
    props.setCardWasChosen(parseInt(id))
  }
  return (
    <div className={props.id === props.cardWasChosen?"card card-ischosen":"card"} onClick={()=>handleClick(props.id)}>
      <div className="card-id">{props.id}</div>
      <div className="card-name">{props.name}</div>
    </div>
  )
}

export default Card;