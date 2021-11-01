import './Details.scss'
import { useEffect, useState } from 'react'
const Details = (props) => {
    const [currentHero, setCurrentHero] = useState(null)

    useEffect(() => {
        setCurrentHero(props.listHeros.find(hero => parseInt(hero.id) === props.cardWasChosen))
    }, [props.cardWasChosen])

    const updateName=(event)=>{
        var listHerosCopy =props.listHeros
        var current_hero=listHerosCopy.find(hero=>parseInt(hero.id) === props.cardWasChosen)
        current_hero.name=event.target.value
        setCurrentHero({...currentHero,name:event.target.value})
        props.setListHeros(listHerosCopy)
        //console.log(props.listHeros)
    }

    if(currentHero!==null && currentHero!==undefined) {
        return (
            <div className="details" >
                <div className="header">{currentHero.name} Details</div>
                <div>Id: {currentHero.id}</div>
                <label for="hero-name">Hero name: </label>
                <input type="text" className="hero-name" value={currentHero.name} onChange={updateName}/>
            </div>
        )
    }
    else{
        return <div></div>
    }
}

export default Details;