const arrie = [
  "pv-entity__summary-info", 
  "pv-skill-entity__skill-name", 
  "pv-top-card-section__summary-text", 
  "pv-entity__description", 
  "truncate-multiline--truncation-target", 
  "pv-top-card-section__headline", 
  "pv-recommendation-entity__text", 
  "profile-info", 
  "module-body searchable", 
  "position", 
  "module primary-module", 
  "title", 
  "positions", 
  "description", 
  "skills"
]

const elementFunc = (classname, keywords) => {
  const domElements = document.getElementsByClassName(classname)
  for (let i = 0; i < domElements.length; i ++) {
    console.log('iterating elem', domElements[i])
    keywords.forEach((key) => {
      console.log('iterating key', key)
      const rgXword = new RegExp(`\\b${key}`, 'igm')
      let count = 0
      while (rgXword.exec(domElements[i].outerHTML) !== null) {
        ++count
      }

      console.log('count', count)

      const colorstart = 70
      const colorlight = 91
      const heaterC = count * 3.5
      const heaterS = count * 1.25
      const colorNumC = colorstart - heaterC
      const colorNumS = colorlight - heaterS
      if (colorNumC < -20) {
        colorNumC = -20
      }
      if (colorNumS < 56) {
        colorNumS = 56
      }
      const highlighted = '</b>' + '<b style="background-color:hsl(' + colorNumC + ', 100%, ' + colorNumS + '%); border-radius:6px;">' + key + '</b>'
      console.log('replacing', domElements[i].outerHTML, 'with', domElements[i].outerHTML.replace(rgXword, highlighted))
      domElements[i].outerHTML = domElements[i].outerHTML.replace(rgXword, highlighted)
    })
  }
}

const highlight = (domArray = []) => {
  arrie.forEach((classname) => elementFunc(classname, domArray))
}

module.exports = { highlight }
