var state = require('./state')
var wombleList = require('./templates/womble-list.hbs')
var about = require('./templates/about.hbs')

document.addEventListener('DOMContentLoaded', render)


var footer = state.getFooter()

function render () {
  var header = state.getHeader()
  var wombles = state.getState()
  var app = document.getElementById('app')
  app.innerHTML = wombleList({
    wombles: wombles,
    header: header,
    footer: footer
  })
  bindEventListeners(app)
}

function renderAbout() {
  header = {
    title: 'About',
    subtitle: 'All about the page'
  }
  var app = document.getElementById('app')
  app.innerHTML = about({
    header: header,
    footer: footer
  })
  bindEventListeners(app)
}



function bindEventListeners (elem) {
  var home = elem.getElementsByClassName('home')
  var about = elem.getElementsByClassName('about')
  var lis = elem.getElementsByTagName('li')
  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function (e) {
      toggleWomble(e.target.parentNode)
    })
  }
  about[0].addEventListener('click', function (){
    renderAbout()
  })
  home[0].addEventListener('click', function (){
    render()
  })
}

function toggleWomble (elem) {
  var name = elem.getAttribute('data-name')
  var showingDetails = elem.getAttribute('data-details') === 'true'
  var updated = state.getState().map(function (womble) {
    if (womble.name === name) {
      womble.showingDetails = !showingDetails
    }
    return womble
  })
  state.setState(updated)
  render()
}
