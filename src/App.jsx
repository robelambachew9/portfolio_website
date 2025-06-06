import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Experiance from "./components/Experiance"
import Contacts from "./components/Contacts"

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
                        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div>
      </div>
      <div className="container mx-auto px-8 text-white">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experiance />
        <Contacts />
      </div>
    </div>
  )
}

export default App



//<h1 class='text-3xl font-bold underline text-white'>
//Hello World!
//</h1>