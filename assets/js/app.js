// vars
const form = document.getElementById('formulario')
const tweetsList = document.getElementById('lista-tweets')

// event listeners
eventListeners()
function eventListeners() {
  // form submit
  form.addEventListener('submit', addTweet)
  tweetsList.addEventListener('click', removeTweet)
  document.addEventListener('DOMContentLoaded', localStorageReady)
}

// functions
function addTweet(e) {
  e.preventDefault()
  // read textarea value
  const tweet = document.getElementById('tweet').value
  // create delete button
  const deleteBtn = document.createElement('a')
  deleteBtn.classList = 'borrar-tweet'
  deleteBtn.textContent = 'X'


  // create element and add to list
  const li = document.createElement('li')
  li.textContent = tweet
  li.appendChild(deleteBtn)
  tweetsList.appendChild(li)

  addTweetToLocalStorage(tweet)
}

function removeTweet(e) {
  e.preventDefault()

  if (e.target.classList.contains('borrar-tweet')) {
    e.target.parentElement.remove()
    removeTweetLocalStorage(e.target.parentElement.textContent)
  }
}

function addTweetToLocalStorage(tweet) {
  let tweets = getTweetsFromLocalStorage()

  tweets.push(tweet)

  localStorage.setItem('tweets', JSON.stringify(tweets))

}

function getTweetsFromLocalStorage() {
  let tweets,
      LSItems = localStorage.getItem('tweets');

  if (LSItems === null) {
    tweets = []
  } else {
    tweets = JSON.parse(LSItems)
  }
  return tweets
}

function localStorageReady() {
  let tweets;

  tweets = getTweetsFromLocalStorage()

  tweets.forEach(tweet => {
    // create delete button
    const deleteBtn = document.createElement('a')
    deleteBtn.classList = 'borrar-tweet'
    deleteBtn.textContent = 'X'


    // create element and add to list
    const li = document.createElement('li')
    li.textContent = tweet
    li.appendChild(deleteBtn)
    tweetsList.appendChild(li)
  })
}
function removeTweetLocalStorage(tweet) {
  let tweets, tweetToDelete;
  tweetToDelete = tweet.substring(0, tweet.length - 1)
  tweets = getTweetsFromLocalStorage()

  tweets.forEach((tweet, index) => {
    if(tweetToDelete === tweet) {
      tweets.splice(index, 1)
    }
  })

  localStorage.setItem('tweets', JSON.stringify(tweets))
}