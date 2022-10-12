import icon from '../assets/globe.png'

function Header () {
  return (
    <header className='header'>
      <img src={icon}/>
      <h1>my travel journal</h1>
    </header>
  )
}

export default Header