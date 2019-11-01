// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function getTopics(callback) {

  axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
      const topics = response.data.topics;
      topics.map(topic => {
        callback(topic);
      });
    })
    .catch(error => {
      console.log(error.message);
  });

}

function Tab(topic) {
  const div = document.createElement('div');
  div.classList.add('tab');

  div.textContent = topic;

  //Adding to DOM
  const topicsTab = document.querySelector('.topics');
  topicsTab.appendChild(div);
}

getTopics(Tab);