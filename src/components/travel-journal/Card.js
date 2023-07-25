export default function Cards(props) {
    let line
    if (props.id === 5) {
        line = ""
    } else {
        line = <hr />
    }
    return(
        <div>
            <div className="card">
                <img src={`../tj-images/${props.img}`} alt="pic" className="card-pic"/>
                <div className="card-content">
                    <img src="../tj-images/location.png" height="9.55px" alt="location"/>
                        <span className="location">{props.country}</span>
                        <a href={props.url}><span className="gray">View on Google Maps</span></a>
                        <h1>{props.city}</h1>
                        <span className="date">{`${props.date.from} - ${props.date.to}`}</span>
                        <p>{props.details}</p>
                </div>
            </div>
            {line}
        </div>
    )
}

/*
        <div className="card">
            <img src="../tj-images/pic1.png" alt="pic" className="card-pic"/>
            <div className="card-content">
                <img src="../tj-images/location.png" height="9.55px" alt="location"/>
                    <span className="location">JAPAN</span><span className="gray">View on Google Maps</span>
                    <h1>Mount Fuji</h1>
                    <span className="date">12 Jan, 2021 - 24 Jan, 2021</span>
                    <p>Mount Fuji is the tallest mountain in Japan, 
                        standing at 3,776 meters (12,380 feet). 
                        Mount Fuji is the single most popular tourist site in Japan, 
                        for both Japanese and foreign tourists.
                    </p>
            </div>
        </div>
*/