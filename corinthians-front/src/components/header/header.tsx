import './header.css';

interface HeaderProps {
    title: string
}

export function Header({ title } : HeaderProps) {
    return (
        <div className="header">
            <div className="headerLeft">
                <h1>{title}</h1>
            </div>

            <div className="headerRight">
                <div className="areaIconsHeader">
                    <i className="bi bi-search icon"></i>
                </div>

                <div className="areaIconsHeader">
                    <i className="bi bi-bell icon"></i>
                </div>
            </div>
        </div>
    )
}