# Weather API demo

## Install

- git clone https://github.com/mattpass/weather_api
- cd weather_api
- npm install
- npx nodemon

## Usage

Example URL call:

http://localhost:3000/?postcode=BA1&date=2023-01-12

- postcode: Required
- date: Optional (defaults to today if not provided)

## Future

Updates will include saving to a relational database and consulting that as a cache store before making API requests (to save on API usage at WorldWeatherOnline).

Lots also needs to be done re deployment, CI/CD, security, authentication and far more. This provides a start however.

## API docs

[WorldWeatherOnline API docs](https://www.worldweatheronline.com/weather-api/api/docs/local-city-town-weather-api.aspx)
