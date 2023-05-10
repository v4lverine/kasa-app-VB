import Banner from "../components/Banner"
import Card from "../components/Cards"
import "../assets/Home.css"
import { useLoaderData } from "react-router-dom"

function Home() {
    const { lodgings } = useLoaderData();

    return (
        <main>
            <Banner pageName="Home" />
            <div className="home-main">
                <ul className="kasa-card-list">
                    {lodgings.map(item => (
                        <Card lodging={item} key={item.id} />
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Home