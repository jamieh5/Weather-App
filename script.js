// QuerySelectors
const locationCity = document.querySelector('.location')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.windspeed')
const input = document.querySelector('.location-input')
const searchInput = document.querySelector('.search-input')
const displayWeather = document.querySelector('.display-weather')

let city
searchInput.addEventListener('click', function () {
  if (input.value === '') {
    console.log('err')
  } else {
    city = input.value
    getWeather()
    displayWeather.style.opacity = '1'
  }
})

const getWeather = async function () {
  const APIKey = '8afca78f8acf4b8c92d150132231902'

  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`
  )
  const info = await response.json()
  console.log(info)

  // Changing HTML Text
  temp.innerHTML = `${info.current.temp_c}°`
  locationCity.innerHTML = info.location.name
  humidity.innerHTML = info.current.humidity
  windSpeed.innerHTML = `${info.current.wind_kph}(km/h)`
}
