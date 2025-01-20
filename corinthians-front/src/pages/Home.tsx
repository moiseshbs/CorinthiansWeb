import { Link } from "react-router-dom";
import { CardKpi } from "../components/cardKpi/cardKpi";
import { usePlayerData } from "../hooks/player/usePlayerData";

function Home() {
    //representa dados que vem da api
    const { data } = usePlayerData();

    return (
        <div>
            <Link to="/dashboard">Ir para Sobre</Link>
            <h1>Bem-vindo à página inicial!</h1>
        {data?.map(foodData =>
            <CardKpi title={foodData.name}
                    content={foodData.number} />
        )}
        </div>
    );
}

export default Home;
