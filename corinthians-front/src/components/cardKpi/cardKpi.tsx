import './cardKpi.css';

interface CardKpiProps {
    title: string,
    content: string
}

export function CardKpi({ title, content }: CardKpiProps) {
    return (
        <div className="cardKpi">
            <div className="headerCard">
                <i className="bi bi-columns-gap side-bar-icon"></i>
                <h1>{title}</h1>
            </div>

            <div className="contentCard">
                <h1>{content}</h1>
            </div>
        </div>
    )
}