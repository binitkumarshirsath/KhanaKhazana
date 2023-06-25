import React from 'react'
import CardItem from './CardItem'

export default function Card({heading,items}) {
    
  return (
    <div className='container card-container my-4'>
      <h2>{heading.charAt(0).toUpperCase() + heading.slice(1)}</h2>
      <div className="card-container d-flex flex-wrap">
      {
        items.map((item,i)=>{
          return <CardItem key={i} item = {item}/>
        })
      }
      </div>
    </div>
  )
}
