
const DogsList = () => {

    const dogs = JSON.parse(localStorage.getItem('dogs'))

    const dogsElements = dogs.map((dog, index) => (
        <div className="list-item-dog">
            <img src={dog.imgUrl} alt={dog.name} className="dog-img"/>
            <p className="dog-name">
                {dog.name}
            </p>
            <p className="dog-breed">
                {dog.breed}
            </p>
        </div>
    ))

    
    return (
        <section>
            <p>Hundar</p>
            <div id="dogs-container">  
                {dogsElements}
            </div>
        </section>
    )
}


export default DogsList 