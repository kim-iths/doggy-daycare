


const Welcome = ({goToOwners, goToDogs}) => {


    return (
        <section className="welcome-page">
            <h2>Välkommen till Doggy Daycare!</h2>
            <p>
                Här kan du kolla vilka som är registrerade och som tidigare har lämnat sina hundar.
                Du kan även kolla på alla hundar som har varit blivit omhändertagna här, och om de är inne för närvarande.
            </p>

            <div>
                <button onClick={goToOwners}>Kunder</button>
                <button onClick={goToDogs}>Hundar</button>
            </div>

        </section>
    )
}

export default Welcome