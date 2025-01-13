import Navbar from "./components/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Story from "./sections/Story"

function App() {

  return (
    <main className="relative min-h-screen
    w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
