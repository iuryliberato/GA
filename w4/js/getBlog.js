console.log('here')

fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
  .then((res) => {
    console.log(res)
  }).then()