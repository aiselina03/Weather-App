const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const selectbox = document.querySelector(".select");
const resultbox = document.querySelector(".result");

function getdata(url) {
    return fetch(url).then((res) => res.json());
}

form.addEventListener("submit", search);

function search(e) {
    e.preventDefault();
    getdata(
        `https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${input.value}`
    ).then((data) => {
        console.log(data);
        input.value = " ";
        resultbox.innerHTML += `    
            <p>City: <span>${data.location.name}</span></p>
            <p>Country: <span>${data.location.country}</span></p>
            <p>Weather Forecast: <span>${data.current[selectbox.value]
            }</span></p>
            <p>Sky Condition: <span>${data.current.condition.text}</span></p>
    `;
    });
}
