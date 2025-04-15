/*
Treehouse Techdegree: FullStack Javascript
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   let itemsPerPage = 9;
   let startIndex = (page * itemsPerPage) - itemsPerPage; 
   let endIndex = page * itemsPerPage;
   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let studentCard = `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
           <h3>${data[i].name.first} ${data[i].name.last}</h3>
           <span class="email">${data[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${data[i].registered.date}</span>
         </div>
       </li>`
         ul.insertAdjacentHTML('beforeend', studentCard);

      }
   }
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   const pageButtons = Math.ceil(list.length / 9);
   const ul = document.querySelector('.link-list');
   ul.innerHTML = '';
   let buttons = '';

   for (let i = 1; i <= pageButtons; i++) {
      buttons += `<li><button type="button">${i}</button></li>`;
   }
   ul.insertAdjacentHTML('beforeend', buttons);


   firstButton = document.querySelector('button').className = 'active';

   ul.addEventListener('click', (e) => {
      const activeButton = document.querySelector('button.active');
      if (e.target.tagName === 'BUTTON') {
         if (firstButton) {
            activeButton.classList.remove('active');
         }
         e.target.classList.add('active');
      }
      showPage(list, e.target.innerHTML);
   })
}





// Call functions
addPagination(data);
showPage(data, 1);
