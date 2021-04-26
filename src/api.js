const url = 'https://api.jsonbin.io/b/607eb43024143e5df089b745'


export async function getData() {

    const response = await fetch(url)
    const data = await response.json()

    console.log(data[5])

    let owners = ['']

    data.forEach((dog, i)=> {
        let owner = dog.owner.name + ' ' + dog.owner.lastName
        owners[i] = owner

        console.log(owners[i])
    });
    
    localStorage.setItem('owners', JSON.stringify(owners))
    //get with: const owners = JSON.parse(localStorage.getItem("owners")) 

}