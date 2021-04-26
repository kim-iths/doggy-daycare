import { useEffect, useState } from 'react';
import './App.css';
import DogsList from './components/DogsList';
import OwnersList from './components/OwnersList';
import Welcome from './components/Welcome';
import { getData } from './api.js'

function App() {
  const WELCOME = 'welcome', OWNERS = 'owners', DOGS = 'dogs'
  let content = null

  const [currentPage, setCurrentPage] = useState(WELCOME)


  //API call here
  useEffect(() => {
    console.log('once')
    getData()

  },[])


switch(currentPage){
  case WELCOME:
    content = <Welcome goToOwners={() => setCurrentPage(OWNERS)} goToDogs={() => setCurrentPage(DOGS)}/>
    break
  case OWNERS:
    content = <OwnersList />
    break
  case DOGS:
    content = <DogsList />
    break
  default: 
    content = <div>null</div>
}

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Doggy Daycare
        </h2>
      </header>
      <main>
        {content}
      </main>
    </div>
  );
}

export default App;

//TODO

//back button
//nicer colors
//better support for mobile