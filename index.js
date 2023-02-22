const btn = document.getElementById("btn");

let jokeContainer = document.getElementsByClassName("joke")[0];

let loader = document.getElementsByClassName("loader-wrapper")[0];

let url = "https://api.api-ninjas.com/v1/dadjokes?limit=2";
let joke;
console.log(jokeContainer);

const getJoke = async () => {
  jokeContainer.innerText = "";

  loader.style.display = "flex";

  console.log("get joke");
  const response = await fetch(url, {
    headers: { "X-Api-Key": "S3U8582vw438D/jO0f7BmQ==IICQ4eE5Me4SWrkm" },
    contentType: "application/json",
  });

  if (response.ok) {
    const data = await response.json();
    // console.log(data[0].joke);
    joke = data[0].joke;
    typeText(joke);
  }
};

let interval;

function typeText(joke) {
  console.log(joke.length);
  let index = 0;
  interval = setInterval(() => {
    if (jokeContainer !== "") {
      loader.style.display = "none";
    }
    if (index < joke.length) {
      console.log(joke.charAt(index));
      jokeContainer.innerText += joke.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 90);
}

btn.addEventListener("click", getJoke);
