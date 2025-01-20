import { useState } from 'react';
import { CardPlayer } from '../../../components/cardPlayer/cardPlayer';
import { Header } from '../../../components/header/header';
import { SideBar } from '../../../components/sideBar/sideBar';
import { usePlayerData } from '../../../hooks/player/usePlayerData';
import './squad.css';
import { CreatePlayer } from '../../../components/createPlayer/createPlayer';

function Squad() {
    const { data } = usePlayerData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

    return (
        <section className="container">
            <SideBar />

            {isModalOpen && <CreatePlayer closeModal={handleOpenModal} />}
            
            <div className="areaContent">
                <Header title='Squad' />

                <div className="areaGraphs">
                    <div className="areaKpis">
                        <div className="cardKpi">
                            <div className="headerCard">
                                <i className="bi bi-columns-gap side-bar-icon"></i>
                                <h1>Primeira KPI</h1>
                            </div>

                            <div className="contentCard">
                                <h1>30/31</h1>
                            </div>
                        </div>

                        <div className="cardKpi">
                            <div className="headerCard">
                                <i className="bi bi-columns-gap side-bar-icon"></i>
                                <h1>Segunda KPI</h1>
                            </div>

                            <div className="contentCard">
                                <h1>30/31</h1>
                            </div>
                        </div>

                        <div className="cardKpi">
                            <div className="headerCard">
                                <i className="bi bi-columns-gap side-bar-icon"></i>
                                <h1>Terceira KPI</h1>
                            </div>

                            <div className="contentCard">
                                <h1>30/31</h1>
                            </div>
                        </div>
                    </div>

                    <div className="areaList">
                        <div className="areaInput">

                            <button onClick={handleOpenModal}>NoVO</button>

                            <input type="text" placeholder="Search..." />
                        </div>

                        <div className="listBody2">
                            {data?.map(playerData =>
                                <CardPlayer
                                    name={playerData.name}
                                    position={playerData.position}
                                    number={playerData.number}
                                    image={playerData.image} />
                            )}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Squad;
