

// const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
// console.log(res)


// try {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((result) => {
//       return result.json()
//     }).then((getBlogs) => {
//       for (let i = 0; i < getBlogs.length; i++) {
//         document.getElementById('blogTitles').innerHTML += `<li>${getBlogs[i].title}</li>`
//       }
//     })
// } catch (error) {
//   console.log('error:', error)
// }


try {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(({ data }) => {

      // for loop
      for (let i = 0; i < data.length; i++) {
        document.getElementById('blogTitles').innerHTML += `<li>${data[i].title}</li>`
      }
    })
} catch (error) {
  console.log('error:', error)
}
