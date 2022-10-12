import icon from '../assets/pin.png'

function Card () {
  return (
    <div className='card'>
      <img src='https://source.unsplash.com/3PeSjpLVtLg' className='photo'/>
      <div className='content-side'>
        <div className='content-header'>
          <img src={icon}/>
          <h4>COUNTRY</h4>
          <p><a href=''>Google map link</a></p>
        </div>
        <h1>Location Name</h1>
        <h3>1 Jan, 2022 - 31 Jan, 2022</h3>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis natus magni obcaecati adipisci eius. Quaerat excepturi molestias dolores possimus aperiam delectus corporis quibusdam laborum assumenda temporibus? Minima sequi nam nulla!</p>
      </div>
      
    </div>
  )
}

export default Card



