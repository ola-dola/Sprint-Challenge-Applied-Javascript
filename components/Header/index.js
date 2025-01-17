// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const requiredElements = ['div', 'span', 'h1', 'span'];
  const [div, date, title, temp] = requiredElements.map(
    element => document.createElement(element)
  );

  //Adding classes
  div.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  //textContent
  date.textContent = 'SMARCH 28, 2019';
  title.textContent = 'Lambda Times';
  temp.textContent = '98°';

  //append
  div.append(date, title, temp);
  
  return div
}

const container = document.querySelector('.header-container');
container.appendChild(Header());