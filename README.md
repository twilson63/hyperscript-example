# hyperscript example

This is a naive implementation of hyperscript, an abstraction over create element. This abstraction allows for a simple declarative style of adding elements to the dom. This declarative style can be the basis of a component architecture pattern.


## Example

Card Component

``` js
import h from 'h.js'

export default function Card(name, description, image) {
  return (
    h('div', {class: 'card'}, 
      h('img', { src: image }),
      h('h1', {class: 'card-title'}, name),
      h('span', {class: 'card-description'}, description)
    )
  )
}
```

Show Cards

``` js
import h from '/h.js'
import Card from '/Card.js'

function render() {
  h('div', {class: 'container'}, 
   cards.map(Card)
  )
}
```



