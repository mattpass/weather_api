//👇🏻index.js
const express = require("express");
const cors = require("cors");
const request = require('request');
const app = express();
const PORT = 3000;

// Settings
const api_base = "https://api.worldweatheronline.com/premium/v1/weather.ashx";
const api_key = "2b5561b1e3904c84b61104938231201";
const api_format = "json"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    data = {
        message: "API error, please contact support",
    }

    // No postcode (required GET param)
    if (!req.query.postcode) {
        data = {
            message: "No postcode in request (required)",
        }
        res.json(data);
    // Have postcode
    } else {
        const postcode = req.query.postcode;
        let api_url = `${api_base}?key=${api_key}&format=${api_format}&q=${postcode}`

        const todayDate = new Date();
        const todayYear = todayDate.getFullYear();
        const todayMonth = todayDate.getMonth() + 1;
        const todayDay = todayDate.getDate();
        let date = `${todayYear}-${todayMonth}-${todayDay}`;

        // Use date if provided
        if (req.query.date) {
            date = req.query.date;
        }

        // API URL to use
        api_url += `&date=${date}`;

        request({
            url: api_url,
            json: true
        }, (error, response, body) => {
            data = {
                request: api_url.replace(api_key, '[KEY]'),
                postcode: response.body.data.request,
                current: response.body.data.current_condition,
                day: response.body.data.weather,
            }
            res.json(data);
        });
    }

    
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
