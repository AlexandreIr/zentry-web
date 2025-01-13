import Navbar from "./components/Navbar"
import About from "./sections/About"
import Hero from "./sections/Hero"

function App() {

  return (
    <main className="relative min-h-screen
    w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App
