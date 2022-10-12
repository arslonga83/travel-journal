import icon from '../assets/pin.png'

function Card (props) {
  return (
    <div className='card'>
      <img src={props.image} className='photo'/>
      <div className='content-side'>
        <div className='content-header'>
          <img src={icon}/>
          <h4>{props.location}</h4>
          <p><a href={props.link}>Google map link</a></p>
        </div>
        <h1>{props.title}</h1>
        <h3>{props.startDate} - {props.endDate}</h3>
        <p className='description'>{props.description}</p>
      </div>
      
    </div>
  )
}

export default Card



