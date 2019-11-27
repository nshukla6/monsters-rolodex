import React from 'react';
import './card.styles.css'


export const Card = props => {
    return <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.devil.id}?set=set2&size=180x180`}></img>
            <h2>{props.devil.name}</h2>
            <p>{props.devil.email}</p>
    </div>
}