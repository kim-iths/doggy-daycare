import { useEffect } from "react"

const OwnersList = ({back}) => {
    const owners = JSON.parse(localStorage.getItem("owners"))

    const ownersElements = owners.map((owner, index) => (
        <div>
            <p className="owner-name">{owner.name}</p>
            {/* <div id="divider"></div> */}
            <p>{owner.phone}</p>
            <p>{owner.dog}</p>
        </div>
    ))

    
    return (
    <section>
        <button onClick={back}>Tillbaka</button>
        <p>Kunder</p>
        <div id="owners-container">
            {ownersElements}
        </div>
    </section>
    )
}


export default OwnersList