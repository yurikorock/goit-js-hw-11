const gallery = document.querySelector('.gallery');


import function renderGallery(images) {
  const markup = images.map((image) => {
    // отримали значення і робимо деструктурізацію по ключовим значенням
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image
    return `<li>
	          <p><b>likes</b>: ${image.likes}</p>
	          <p><b>views</b>: ${image.views}</p>
	          <p><b>comments</b>: ${image.comments}</p>
            <p><b>downloads</b>: ${image.downloads}</p>
	        </li>`
  }).join("separator");
}
// function renderUsers(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   userList.insertAdjacentHTML('beforeend', markup);
// }
