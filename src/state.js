module.exports = {
  getState: getState,
  setState: setState,
  getHeader: getHeader,
  getFooter: getFooter,
  getSidebar: getSidebar
}

var wombles = [{
  name: 'Orinocco',
  email: 'orinocco@wimbledoncommon.net',
  details: 'Tin cans',
  showingDetails: false
}, {
  name: 'Tomsk',
  email: 'tomsk@wimbledoncommon.net',
  details: 'Plastic bags',
  showingDetails: false
}, {
  name: 'Bungo',
  email: 'bungo@wimbledoncommon.net',
  details: 'Discarded wombat poop',
  showingDetails: false
}]

function getState () {
  return wombles
}

function setState (state) {
  wombles = state
}

var header = {
  title: 'Wombles',
  subtitle: 'A collection of wombles'
}

function getHeader () {
  return header
}

var footer = {
  copyright: '(c) 2017',
  contact: 'Orinocco@wimbledom.com'
}

function getFooter () {
  return footer
}

var links = {
  home: 'www.realurl.com',
  about: 'www.realurl.com',
  FAQ: 'www.realurl.com'
}

function getSidebar (){
  return links
}
