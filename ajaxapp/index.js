console.log("index.js: loaded");

// DOM Sample
const heading = document.querySelector('h2');
const headngText = heading.textContent;
const button = document.createElement('button');

// Fetch API
function fetchUserInfo(userId) {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
  .then(response => {
    console.log(response.status);
    if (!response.ok) {
      console.error("エラーレスポンス", response);
    } else {
      return response.json().then(userInfo => {
        console.log(userInfo);
      });
    }
  }).catch(error => {
    console.log(error);
  });
}