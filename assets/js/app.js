// vars
const form = document.getElementById('formulario')
const tweetsList = document.getElementById('lista-tweets')

// event listeners
eventListeners()
function eventListeners() {
  // form submit
  form.addEventListener('submit', addTweet)
  tweetsList.addEventListener('click', removeTweet)
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
}

function removeTweet(e) {
  e.preventDefault()

  if (e.target.classList.contains('borrar-tweet')) {
    e.target.parentElement.remove()
  }
}