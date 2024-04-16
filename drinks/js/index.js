// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");

// const swiperEl = document.querySelector("swiper-container");
// swiperEl.addEventListener("autoplaytimeleft", (e) => {
//     const [swiper, time, progress] = e.detail;
//     progressCircle.style.setProperty("--progress", 1 - progress);
//     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
// });
// console.log("Hello");

const body = document.querySelector("body")

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        data.drinks.forEach((element) => {
            const divs = document.createElement("div")
            console.log(element.strIngredient2);
            const img = element.strDrinkThumb
            const text = element.strDrink
            divs.innerHTML = `<img src="${img}"/>
            <h1> ${text}</h1>`
            body.appendChild(divs)
        });
    });
// Wrap your code in an async function
// async function to fetch data
const url = 'https://arabic-news-api.p.rapidapi.com/france24arabic';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9f573245e8msh98d8b92209920b4p1e9989jsn8c93d213ff4f',
        'X-RapidAPI-Host': 'arabic-news-api.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}