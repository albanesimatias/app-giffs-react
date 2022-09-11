import Buscador from "../../components/Buscador"
import Logo from "../../components/Logo"
import TrendringSearchs from "../../components/TrendingSearchs"

export default function Home () {
    return (
        <div className="Container">
            <Logo url={'https://i.pinimg.com/originals/e5/93/ab/e593ab0589d5f1b389e4dfbcce2bce20.gif'} />
            <Buscador />
            <div>
                <h3 className="App-tittle">Los gifs mas populares</h3>
                <TrendringSearchs />
            </div>
        </div>
    )
}