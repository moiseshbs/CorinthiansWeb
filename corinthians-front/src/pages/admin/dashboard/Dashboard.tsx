import { CardKpi } from '../../../components/cardKpi/cardKpi';
import { Header } from '../../../components/header/header';
import { SideBar } from '../../../components/sideBar/sideBar';
import './dashboard.css';

function Dashboard() {
    return (
        <section className="container">
            <SideBar />

            <div className="areaContent">
                <Header title='Dashboard'/>

                <div className="areaGraphs">
                    <div className="areaKpis">
                        <CardKpi title='Primeira KPI' content='Um' />

                        <CardKpi title='Segunda KPI' content='Dois' />

                        <CardKpi title='Terceira KPI' content='Três' />
                    </div>

                    <div className="areaGraph">
                        <div className="areaHorizontalGraph">
                            <div className="cardGraph">
                                <div className="headerCard">
                                    <i className="bi bi-columns-gap side-bar-icon"></i>
                                    <h1>Primeiro Grafico</h1>
                                </div>

                                <div className="contentCard">
                                    <div className="chart-card">
                                        <canvas id="myChart"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div className="cardGraph">
                                <div className="headerCard">
                                    <i className="bi bi-columns-gap side-bar-icon"></i>
                                    <h1>Segundo Grafico</h1>
                                </div>

                                <div className="contentCard">
                                    <div className="chart-card">
                                        <canvas id="myChart1"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="areaVerticalGraph">
                            <div className="cardGraph">
                                <div className="headerCard">
                                    <i className="bi bi-columns-gap side-bar-icon"></i>
                                    <h1>Terceiro Grafico</h1>
                                </div>

                                <div className="contentCard">
                                    <div className="chart-card">
                                        <canvas id="myChart2"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
