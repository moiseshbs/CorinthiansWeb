import { Header } from '../../../components/header/header';
import { SideBar } from '../../../components/sideBar/sideBar';
import './post.css';

function Post() {
    return (
        <section className="container">
            <SideBar />

            <div className="areaContent">
                <Header title='Post' />

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
                            <input type="text" placeholder="Search..." />
                        </div>

                        <div className="listBody">
                            <div className="bodyDiv">
                                <div className="headerDiv headerDiv1">
                                    <h1>Primeiro</h1>
                                </div>

                                <div className="bodyRow">
                                    <h3>Primeiro nome</h3>
                                </div>
                                <div className="bodyRow">

                                </div>
                                <div className="bodyRow">
                                    <h3></h3>
                                </div>
                                <div className="bodyRow">

                                </div>
                                <div className="bodyRow">
                                    <h3></h3>
                                </div>
                                <div className="bodyRow">

                                </div>
                                <div className="bodyRow">
                                    <h3></h3>
                                </div>
                                <div className="bodyRow">

                                </div>
                            </div>

                            <div className="bodyDiv">
                                <div className="headerDiv">
                                    <h1>Primeiro</h1>
                                </div>

                                <div className="bodyRow">
                                    <h3>Primeiro nome</h3>
                                </div>
                                <div className="bodyRow">

                                </div>
                            </div>

                            <div className="bodyDiv">
                                <div className="headerDiv headerDivLast">
                                    <h1>Primeiro</h1>
                                </div>

                                <div className="bodyRow">
                                    <h3>Primeiro nome</h3>
                                </div>
                                <div className="bodyRow">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Post;
