
import Navbar from "../src/components/Navbar"
import Hero from "../src/components/Hero"
import Card from "../src/components/Card"
import data from "../src/data"

export default function App() {

    const cards = data.map(items => <Card
                key={items.id} 
                item={items} />
)
    return (

        <div>
            <Navbar />
            <Hero />
            <div className="cards">
                {cards}
                {cards}
            </div>
        </div>
    )
}
