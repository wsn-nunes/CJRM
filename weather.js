const apiKey = "CYaEI9meQ0RlvqSBmgBY08on5AHqFeN5"
const baseUrl = `http://dataservice.accuweather.com`

const getCityName = async (cityName) => {
    try{
    const response = await fetch(`${baseUrl}/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`)
    if(!response.ok){
        throw new Error("Não pode ser realizada a requisição")  
    }
    const [dataCityName] = await response.json() // destructuring para pegar só o primeiro array com a característica correta
    return dataCityName
}catch(error){
    console.log(error + " :error")
    }
}

getCityWeather = async (cityKey) => {
    try{
        const response = await fetch(`${baseUrl}/currentconditions/v1/${cityKey}?apikey=${apiKey}`)
        if(!response.ok){
            throw new Error("Não pode ser realizada a requisição")
        }
        const [dataWeather] = await response.json()
        return dataWeather
    }catch(error){
        console.log(error)
    }
}

getCityName("são paulo")
.then(console.log)
getCityWeather(45881)
.then(console.log)