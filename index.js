const joke = document.querySelector(".joke-container");
const jokeBtn = document.querySelector(".joke-generator");

window.addEventListener("DOMContentLoaded",function(){
    getjoke();
})

let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&idRange=0-200";

 async function getjoke(){
    joke.classList.remove("fade");
    let content =  await fetch(url);
    let response = await content.json();
    joke.textContent = `${response.joke}`
    joke.classList.add("fade");
}

jokeBtn.addEventListener("click" , getjoke)
getjoke();
