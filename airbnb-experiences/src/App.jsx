import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Card from './components/Card'
import data from './data'

export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className='cards-list'>
        {cards}
        {cards}
        {cards}
      </section>
    </div>
  )
}

