import { Navbar, Hero, About, MultiParallax, Footer, More } from "./const"

function App() {
    return (
        <section className="overflow-hidden bg-transparent">
            <Navbar/>
            <MultiParallax/>
            <About />
            <More />
            <Footer />
        </section>
    )
}

export default App
