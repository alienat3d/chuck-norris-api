// https://api.chucknorris.io/

const API_URL = 'https://api.chucknorris.io/jokes/random';
const blockquote = document.querySelector('.blockquote-text');
const nextQuoteBtn = document.querySelector('.next-btn');
const avatar = document.querySelector('.avatar');
let isInit = true;

const getData = async (url) => {
  await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (isInit) {
        avatar.src = data.icon_url;
        isInit = false;
      }
      blockquote.textContent = data.value;
    })
    .catch((error) => {
      console.error('Could not fetch data:', error);
    });
};

nextQuoteBtn.addEventListener('click', () => getData(API_URL));

getData(API_URL);
