import { Link } from 'react-router-dom';
import './sideBar.css';

export function SideBar() {
    return (
        <div className="side-bar">
            <div className="side-bar-extremes">
                <img src='https://raw.githubusercontent.com/moiseshxs/site-vertice/refs/heads/main/img/v-logo/logo%20e%20nome(v).png' />
            </div>
            <div className="side-bar-main">
                <Link className="side-bar-options" to="/dashboard">
                    <i className="bi bi-columns-gap side-bar-icon"></i>
                    <h4>Dashboard</h4>
                </Link>

                <Link className="side-bar-options" to="/squad">
                    <i className="bi bi-people side-bar-icon"></i>
                    <h4>Squad</h4>
                </Link>

                <Link className="side-bar-options" to="/post">
                    <i className="bi bi-file-earmark-plus side-bar-icon"></i>
                    <h4>Post</h4>
                </Link>
            </div>
            <div className="side-bar-extremes">
                <div className="side-bar-options">
                    <i className="bi bi-box-arrow-right side-bar-icon"></i>
                    <h4>Log out</h4>
                </div>
            </div>
        </div>
    )
}