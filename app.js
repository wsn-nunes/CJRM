const form = document.querySelector('[data-js="formWeather"]')
const cityNameApp = document.querySelector('[data-js="cityNameWeather"]')
const cityWeatherApp = document.querySelector('[data-js="cityNameClima"]')
const cityWeatherTemperature = document.querySelector('[data-js="cityNameTemperature"')
const cardImg = document.querySelector('[data-js="img-card"]')

form.addEventListener("submit", async event => {
    event.preventDefault()
    
    const cityName = event.target.input.value
    const cityData = await getCityName(cityName)
    const {Key,LocalizedName} = cityData
    const {WeatherText,Temperature,IsDayTime} = await getCityWeather(Key)

    if(IsDayTime){
        cardImg.src = `./src/day.jpg`
    }else{
        cardImg.src = `./src/night.jpg`
    }
    
    if(cardImg.classList.contains("d-none")){ // contains parecido com o includes , porém funciona se o conteúdo se encontra na classe do css, utilizada no html
        cardImg.classList.remove("d-none") // este método remove a classe do elemento html
    }

    cityNameApp.textContent = LocalizedName
    cityWeatherTemperature.textContent = Temperature.Metric.Value
    cityWeatherApp.textContent = WeatherText

    form.reset()
})

