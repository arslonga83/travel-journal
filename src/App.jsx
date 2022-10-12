import Header from './Components/Header'
import Card from './Components/Card'
import Footer from './Components/Footer'
import data from './data'
import './App.css'


function App() {
  const dataArray = data.map((item) => {
    return <Card 
      title={item.title}
      location={item.location}
      link={item.googleMapsUrl}
      description={item.description}
      startDate={item.startDate}
      endDate={item.endDate}
      image={item.imageUrl}
    />
    
  })

  return (
    <div className="App">
      <Header />
      <section className='card-container'>
        {dataArray}
      </section>
      <Footer /> 
    </div>
  )
}

export default App
