import React from 'react'
import './CardList.style.css'
import Card from '../card/Card'

const CardList = (props) => {

    return (
        <div className="cardList">
            {props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)}
        </div>
    )
}


export default CardList