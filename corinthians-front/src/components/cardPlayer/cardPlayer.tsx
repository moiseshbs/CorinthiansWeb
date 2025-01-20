import './cardPlayer.css';

interface CardPlayerProps {
    name: string,
    position: string,
    number: string,
    image: string        
}

export function CardPlayer({ name, position, number, image }: CardPlayerProps) {
    return (
        <div className="cardPlayer">
            <img className='imgPlayer' src={image} />
        
            <div className='footerPlayer'>
                <div className='infoPlayer'>
                    <h1 className='numberPlayer'>{number}</h1>
                    <div className='rightInfo'>
                        <h1>{name}</h1>
                        <h3>{position}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}