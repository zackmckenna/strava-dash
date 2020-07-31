import fetch from 'node-fetch'

export const getStrava = async ({ test }) => {
  const response = await fetch(
    `http://www.strava.com/oauth/authorize?client_id=${process.env.REACT_APP_STRAVA_CLIENT_ID}&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read`
  )
  const json = await response.json()

  return {
    test,
    city: json.name,
    conditions: json.weather[0].main,
    temp: Math.round(((json.main.temp - 273.15) * 9) / 5 + 32),
    icon: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
  }
}
