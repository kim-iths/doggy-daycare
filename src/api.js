const url = 'https://api.jsonbin.io/b/6086dc87f6655022c46c5a56'


export async function getData() {

    const response = await fetch(url)
    const data = await response.json()

    // console.log(data[5])

    let owners = []
    
    let dogs = []
    
    data.forEach((dog, i)=> {
        let owner = { 
            'name' : dog.owner.name + ' ' + dog.owner.lastName, 
            'phone' : dog.owner.phoneNumber,
            'dog' : dog.name + ', ' + dog.breed }
        owners[i] = owner
        
        let currentDog = { 
            'name' : dog.name, 
            'sex' : dog.sex, 
            'breed' : dog.breed, 
            'imgUrl' : dog.img, 
            'present' : dog.present, 
            'age' : dog.age, 
            'chipNumber' : dog.chipNumber, 
            'owner' : owner.name + ', ' + owner.phone }

        dogs[i] = currentDog
    });

    localStorage.setItem('dogs', JSON.stringify(dogs))
    localStorage.setItem('owners', JSON.stringify(owners))
    //get with: const owners = JSON.parse(localStorage.getItem("owners")) 



    let parsedDogs = JSON.parse(localStorage.getItem('dogs'))
    parsedDogs.map((dog, index) => {
        console.log(dog.name)
        console.log(dog.age)
        console.log(dog.breed)
        console.log(dog.isPresent)
    })
}