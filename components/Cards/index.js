// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function getArticles(callback) {
  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
      // console.log(response.data);
      // console.log(Object.values(response.data.articles));
      const articlesArray = Object.values(response.data.articles);

      articlesArray.map(element => {
        for (i = 0; i < element.length; i++) {
          callback(element[i]);
        }
      })
    })
    .catch(error => {
      console.log(error.message);
    })
}

function makeCard(articleObject) {
  const requiredElements = ['div', 'div', 'div', 'div', 'img', 'span'];
  const [parentDiv, headlineDiv, authorDiv, imageDiv, image, span] = requiredElements.map(
    element => document.createElement(element)
  )

  //Adding class
  parentDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imageDiv.classList.add('img-container');
  
  //textContent and src
  headlineDiv.textContent = articleObject.headline;
  image.src = articleObject.authorPhoto;
  span.textContent = `By ${articleObject.authorName}`;

  //append
  imageDiv.appendChild(image);
  authorDiv.append(imageDiv, span);
  parentDiv.append(headlineDiv, authorDiv);

  //adding to DOM
  const container = document.querySelector('.cards-container');
  return container.appendChild(parentDiv);
}

getArticles(makeCard);