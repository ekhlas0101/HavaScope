# فایل: api.R (سرور زنده زبان R برای وب‌اپلیکیشن HavaScope)
library(plumber)
library(jsonlite)

#* @filter cors
function(req, res) {
  res$setHeader("Access-Control-Allow-Origin", "*")
  res$setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res$setHeader("Access-Control-Allow-Headers", "Content-Type")
  if (req$REQUEST_METHOD == "OPTIONS") {
    res$status <- 200
    return(list())
  }
  plumber::forward()
}

#* دریافت آب‌وهوای زنده، پیش‌بینی ساعتی دقیق و ۷ روزه از طریق زبان R
#* @param lat عرض جغرافیایی
#* @param lon طول جغرافیایی
#* @get /live_weather
function(lat = 41.0082, lon = 28.9784) {
  url <- paste0(
    "https://api.open-meteo.com/v1/forecast?latitude=", lat,
    "&longitude=", lon,
    "&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
    "&hourly=temperature_2m,weather_code,precipitation_probability",
    "&daily=weather_code,temperature_2m_max,temperature_2m_min",
    "&timezone=auto&forecast_days=7"
  )
  weather_data <- fromJSON(url)
  return(weather_data)
}