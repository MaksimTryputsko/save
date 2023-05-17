// const moveto = new MoveTo()

// const buttons = document.querySelectorAll('button');

// buttons.forEach(btn => moveto.registerTrigger(btn))

// const link = document.querySelector('a');
// link.addEventListener('click', handleClick)

// function handleClick (event) {
//   event.preventDefault(); // отменяет действия браузера по умолчанию
//   const target = document.querySelector(this.getAttribute('href'));
//   moveto.move(target, {
//     duration: 2000
//   })
// }

// tippy('[data-tippy-content]', {
//   theme:'light',
//   animation: 'scale',
// });

// OverlayScrollbars(document.querySelectorAll('.overlay'/* - область которую мы хотим скролить*/), {
//   className: 'os-host-flexbox' // убераем эллемент скролла 
//  });


//  const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   //loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });


// IMask(document.getElementById('phone'),{
//   mask: '+{375}(00)-000-00-00'
// })
// IMask(document.getElementById('age'),{
//   mask: Number,
//   min:0,
//   max:99,
// })

// IMask(document.getElementById('date'),{
//   mask: Date,
//   lazy: false,
//   autofix: true,
//   blocks: {
//     d: {
//       mask: IMask.MaskedRange,
//        placeholderChar: 'd',
//         from: 1, to: 31,
//          maxLength: 2
//         },
//     m: {
//       mask: IMask.MaskedRange,
//       placeholderChar: 'm',
//       from: 1, to: 12,
//       maxLength: 2
//     },
//     Y: {
//       mask: IMask.MaskedRange,
//        placeholderChar: 'y', 
//        from: 1900, 
//        to: 2999, 
//        maxLength: 4
//       }
//   }
// })
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE'
// }) 
// .then(response => {
//   if (response.ok){
//     return response.json()
//   }
//   throw new Error('Failed to fetch')
// })
// .then(console.log)



// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({id: 201, title: 'My title', body: 'text', userId: 1}),
//   headers: {
//     'Content-Type': 'application/json',
//   }
// }) 


// .then(response => {
//   if (response.ok){
//     return response.json()
//   }
//   throw new Error('Failed to fetch')
// })
// .then(console.log)

// async function getUsers() {
//  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//  const data = await response.json();

//  console.log(data)
// }

// getUsers().then(console.log)
//const getUsers = async() => {}

// async function getUsers() {
//   try{ 
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   console.log(data)
//   throw new Error('Failed!!!')
//   } catch (error) {
//       console.error(error.message)
      
//   }
  
//  }
//  getUsers()

async function getPostsBerlin() {
  const response = await fetch('https://jsonplaceholder.typicode.com/berlin/posts'); 
  const data = await response.json();
  return data //[post1]
}

async function getPostsNewYorl() {
  const response = await fetch('https://jsonplaceholder.typicode.com/berlin/newyork/posts'); 
  const data = await response.json();
  return data //[post1]
}

async function getPostsDefault() {
  const response = await fetch('https://jsonplaceholder.typicode.com/berlin/Default/posts'); 
  const data = await response.json();
  return data //[post1]
}


Promise.race([getPostsBerlin(), getPostsNewYorl(), getPostsDefault()]).then(
  
)


















// async function getUsers() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
//   const data = await response.json();
//   return data //[user1]
// }

// async function getComments() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/comments'); 
//   const data = await response.json();
//   return data //[comments]
// }

// Promise.all([getPosts(), getUsers(), getComments()]).then(
//   (values) =>{  // [[post1], [user1], [comments1 ]]
//     const [posts, users , comments] = values;
//     console.log(posts, users , comments)

//   } 
// ).catch(console.error)