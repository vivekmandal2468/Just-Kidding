document.addEventListener("DOMContentLoaded", () => {
  const mainImg = document.getElementById("mithunImg");
  const secondContainer = document.getElementById("second-container");
  const randomImg = document.getElementById("random-img");
  const insultText = document.getElementById("insult");
  const roastButton = document.getElementById("roastButton");

  const images = [
    "images/1.png",
    "images/mithunda.webp",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpg",
  ];

  roastButton.addEventListener("click", handelFirstClick);

  //Handels first click
  function handelFirstClick() {
    gridClassActive();
    roastChange();
    roastButton.removeEventListener("click", handelFirstClick);
    roastButton.addEventListener("click", roastChange);
  }
  //grid activates ()
  function gridClassActive() {
    secondContainer.classList.remove("hidden");
    mainImg.classList.add("hidden");
  }
let index = 0 ;
const total = 19 ;

  //Img. and roastChange function
  async function roastChange() {
    //sequence img. Show
    // const randomNum = Math.floor(Math.random() * images.length); // 18(no. of img.) ki gagah images.length use kea hai isse baad me images ko baad me add ya remove bhi kr sakte hai
    // randomImg.src = images[randomNum];
    // -----------------------------------------
    randomImg.src = images[index];
    index++ ;
    if (index >= total) {
      index = 0 ;
    }

    // ------------------------------------------------------
    // roastFunction
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark");
      const jokeResponse = await response.json();
      if (jokeResponse.type === "single") {
        insultText.textContent = jokeResponse.joke;
      }
      if (jokeResponse.type === "twopart") {
        insultText.textContent = `Setup - ${jokeResponse.setup}`;
        //4 sec ke baad next part joke ka
        setTimeout(() => {
          // insultText.textContent = `Setup - ${jokeResponse.setup}`;
          insultText.innerHTML = `Setup - ${jokeResponse.setup}<br><br> - ${jokeResponse.delivery};
        }, 6000);
      }
      if (jokeResponse.error === "true") {
        insultText.textContent = jokeResponse.message;
      }
    } catch (error) {
      insultText.textContent = "NO Joke Found ...";
    }
  }
});


