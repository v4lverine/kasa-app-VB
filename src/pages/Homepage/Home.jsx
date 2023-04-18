import Banner from "../../components/Banner"
import Card from "../../components/Cards"
import "../../assets/Home.css"

function Home() {
return (
    <div>
        <Banner pageName="Home"/>
        <div className="home-main">
            <Card/>
        </div>    
    </div>
    )
}

export default Home