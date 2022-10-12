import Header from './Components/Header'
import Card from './Components/Card'
import Footer from './Components/Footer'
import './App.css'


function App() {

  return (
    <div className="App">
      <Header />
      <section className='card-container'>
        <Card/>
        <Card/>
        <Card/>
      </section>
      <Footer /> 
    </div>
  )
}

export default App
