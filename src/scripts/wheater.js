async function getTempFromLocation (location) {
  const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + location + '&days=1'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e93a031a42msh44309175491777fp17531fjsnf49b79c419fe',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }

  try {
    await fetch(url, options)
      .then(response => response.json())
      .then(response => {
        return console.log(response.forecast.forecastday[0].day.mintemp_c)
      })
  } catch (error) {
    console.error(error)
  }
}
