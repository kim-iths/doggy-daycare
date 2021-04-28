import { useEffect, useState } from "react"

const DogsList = ({back}) => {
    
    const dogs = JSON.parse(localStorage.getItem('dogs'))
    
    const isOpenArray = []
    dogs.forEach((element, i) => {
        isOpenArray[i] = false
    })

    // const [isOpen, setIsOpen] = useState([...isOpenArray])
        
    // setIsOpen([])
    const dogsElements = dogs.map((dog, index) => (
        <div  key={index} 
        id={index}
        className={isOpenArray[index] ? "list-item-dog item-open" : "list-item-dog"} 
        onClick={() => toggleInfo(index)}>

        <div className={isOpenArray[index] ? "primary-info item-open" : "primary-info"}>
            <img src={dog.imgUrl} alt={dog.name} className="dog-img"/>
            <p className="dog-name">
                {dog.name}
                <span>{dog.sex == "male" ? "Hane" : "Hona"}</span>
            </p>
            <div className="dog-secondary-info">
            <p className="dog-breed">
                {dog.breed}
            </p>
            <p className="dog-age">
                {dog.age} år
            </p>
            </div>
        </div>
            <div className="dog-info">
                <p>{dog.name} är {dog.present ? "" : "inte "}inne</p>
                <p>{dog.chipNumber}</p>
                <p id="dog-owner">{dog.owner}</p>
            </div>
        </div>
    ))

    function toggleInfo(index){
        isOpenArray[index] = !isOpenArray[index]

        let item = document.getElementById(index)

        if(isOpenArray[index]){
            item.classList.add('item-open')
        } else {
            item.classList.remove('item-open')
        }

    }
    
    return (
        <section>
            <button onClick={back}>Tillbaka</button>
            <p>Hundar</p>
            <div id="dogs-container">  
                {dogsElements}
            </div>
        </section>
    )
}



export default DogsList 