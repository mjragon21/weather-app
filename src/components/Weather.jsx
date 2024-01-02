import React, { useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import cloud from "../assets/cloud.png";
import humidity from "../assets/humidity.png";
import clear from "../assets/clear.png";
import drizzle from "../assets/drizzle.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const Weather = () => {
    let api_key = "065f4335ef61d4bdb3ad3c5cde6d2fb6";

    const [wicon, setWicon] = useState(cloud);



    const search = () => {
        const searchInput = document.getElementById("default-search");
        if (!searchInput || !searchInput.value) {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=Metric&appid=${api_key}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const humidityElement = document.getElementById("humidity-percent");
                const windElement = document.getElementById("wind-rate");
                const temperatureElement = document.getElementById("weather-temp");
                const locationElement = document.getElementById("weather-location");

                humidityElement.innerHTML = `${data.main.humidity}%`;
                windElement.innerHTML = `${data.wind.speed} km/h`;
                temperatureElement.innerHTML = `${data.main.temp}°C`;
                locationElement.innerHTML = data.name;


                if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
                    setWicon(clear);
                } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
                    setWicon(cloud);
                } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
                    setWicon(drizzle);
                } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
                    setWicon(drizzle);
                } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
                    setWicon(rain);
                } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
                    setWicon(rain);
                } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
                    setWicon(snow);
                } else {
                    setWicon(clear);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <Card color="gray-100" className="mt-20 ml-96 w-96 bg-blue-gray-700 h-auto p-4">
            <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative flex items-center">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute inset-y-0 start-0 ps-3 pointer-events-none"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search City..."
                        required
                    />
                    <button
                        onClick={() => { search() }}
                        type="button"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

                <img className="h-50 w-44 flex self-center" src={wicon} alt="" />
            <Card color="" className="flex self-center bg-inherit h-auto" shadow={false}>
                <Typography id='weather-location' variant="small" color="white" className="font-normal uppercase">


                    Weather App
                </Typography>
                <Typography variant="h1" color="white" className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                    <span id="weather-temp" className="mt-2 text-4xl"></span>{' '}
                    <span className="self-end text-4xl"></span>
                </Typography>

                <div class="h-64 grid grid-cols-2 gap-x-20 pt-9">
                    <Card className='bg-inherit flex justify-center' shadow={false}>

                        <Typography color="white">

                            Humidity
                        </Typography>
                        <img className="h-1/5 w-10 m-6" src={humidity} alt="" />
                        <h2 id="humidity-percent" className="text-white" >
                        </h2>

                    </Card>

                    <Card className='bg-inherit flex justify-center' shadow={false}>

                        <Typography color="white">

                            Wind Speed
                        </Typography>
                        <img className="h-1/5 w-10 m-6" src={wind} alt="" />
                        <h2 id="wind-rate" className="text-white" >
                        </h2>

                    </Card>
                    
                    
                </div>

            </Card>
        </Card>
    );
};

export default Weather;
