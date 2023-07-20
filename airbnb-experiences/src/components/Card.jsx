import React from 'react'
import StarIcon from '../assets/star-icon.png'


export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.item.location === "Online") {
        badgeText = 'ONLINE'
    }

    return (
        <section className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={props.item.coverImg} alt='Katie Zafares' className='card-img' />
            <div className='card-stats'>
                <img src={StarIcon} alt='Star Icon' className='star-img' />
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"> <b>From ${props.item.price}</b> / person</p>
        </section>
    )
}
