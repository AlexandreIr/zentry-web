import Navbar from "./components/Navbar"
import About from "./sections/About"
import Features from "./sections/Features"
import Hero from "./sections/Hero"

function App() {

  return (
    <main className="relative min-h-screen
    w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
    </main>
  )
}

export default App
