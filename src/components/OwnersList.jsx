import { useEffect } from "react"

const OwnersList = () => {
    const owners = JSON.parse(localStorage.getItem("owners"))

    const ownersElements = owners.map((owner, index) => (
        <div>{owners[index]}</div>
    ))

    
    return (
    <section>
        <p>Kunder</p>
            <div id="owners-container">
            {ownersElements}
        </div>
    </section>
    )
}


export default OwnersList