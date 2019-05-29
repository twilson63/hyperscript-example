/**
 * @param {string} el - element to create
 * @param {object} attrs - attributes to add to element is optional
 * @param {array} children - one to many nodes to append to element
 *
 * @returns {Node} - DOM Node to render to document
 */
export default function h(el='div', attrs={}, ...children) {
  // closure function to manage appendChild
  function append(el) {
    return function (child) {
      el.appendChild(
        typeof child === 'string' 
        ? new Text(child)
        : child
      )
    }
  }
  // make attrs optional
  if (typeof attrs === 'string') { 
    children = [attrs, ...children]
    attrs = {}
  }
  if (attrs instanceof Node) {
    children = [attrs, ...children]
    attrs = {}
  }
  if (attrs.length) {
    children = attrs.concat(children)
  }
  // create element
  var element = document.createElement(el)
  // setup append HOF
  var doAppend = append(element)
  // add attributes
  Object.keys(attrs).forEach(k => {
    var key = k === 'class' ? 'className' : k
    element[key] = attrs[k]
  })
  // append children
  children.forEach(doAppend)
  // return element
  return element
}

