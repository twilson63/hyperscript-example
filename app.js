import h from './h.js'

function renderImages(images) {
  return (
    h('ul', 
      images.map(({name, photographer, source}) =>
        h('li', {class: 'debug-card'}, 
         h('img', { src: source}),
         h('h2', {class: 'debug-title'}, name),
         h('span', {class: 'debug-author'}, ` by ${photographer}`)
       )
      )
    )
  )
}

function fetchImages() {
  fetch('images.json')
    .then(res => res.json())
    .then(renderImages)
    .then(node => {
      document.body.appendChild(node)
    })
}

document.getElementById('fetchImages')
  .addEventListener('click', fetchImages)

