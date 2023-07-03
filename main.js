function setCSSProperty(propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value)
}

const formColor = document.getElementById('formColors')

formColor.addEventListener('change', function (e) {
  e.preventDefault()
  let inptChecked = document.querySelector('input[name="colorPage"]:checked')

  switch (inptChecked.id) {
    case 'firstColor':
      firstPalet()
      break
    case 'secondColor':
      secondPalet()
      break
    case 'thirdColor':
      thirdyPalet()
      break
    case 'fourthColor':
      fourthPalet()
      break
    case 'fifthColor':
      fifthPalet()
      break
    case 'sixthColor':
      sixthPalet()
      break
  }
})

function firstPalet() {
  const firstPaletColors = {
    primaryColor: '#27374D',
    secondaryColor: '#526D82',
    tertiaryColor: '#9DB2BF',
    quartenaryColor: '#DDE6ED'
  }

  setCSSProperty('--primary-color', firstPaletColors.primaryColor)
  setCSSProperty('--secondary-color', firstPaletColors.secondaryColor)
  setCSSProperty('--tertiary-color', firstPaletColors.tertiaryColor)
  setCSSProperty('--quartenary-color', firstPaletColors.quartenaryColor)
}

function secondPalet() {
  const secondPaletColors = {
    primaryColor: '#18122B',
    secondaryColor: '#393053',
    tertiaryColor: '#443C68',
    quartenaryColor: '#635985'
  }

  setCSSProperty('--primary-color', secondPaletColors.primaryColor)
  setCSSProperty('--secondary-color', secondPaletColors.secondaryColor)
  setCSSProperty('--tertiary-color', secondPaletColors.tertiaryColor)
  setCSSProperty('--quartenary-color', secondPaletColors.quartenaryColor)
}

function thirdyPalet() {
  const thirdPaletColors = {
    primaryColor: '#0A2647',
    secondaryColor: '#144272',
    tertiaryColor: '#205295',
    quartenaryColor: '#2C74B3'
  }

  setCSSProperty('--primary-color', thirdPaletColors.primaryColor)
  setCSSProperty('--secondary-color', thirdPaletColors.secondaryColor)
  setCSSProperty('--tertiary-color', thirdPaletColors.tertiaryColor)
  setCSSProperty('--quartenary-color', thirdPaletColors.quartenaryColor)
}

function fourthPalet() {
  const fourthPaletColors = {
    primaryColor: '#E23E57',
    secondaryColor: '#88304E',
    tertiaryColor: '#522546',
    quartenaryColor: '#311D3F'
  }

  setCSSProperty('--primary-color', fourthPaletColors.primaryColor)
  setCSSProperty('--secondary-color', fourthPaletColors.secondaryColor)
  setCSSProperty('--tertiary-color', fourthPaletColors.tertiaryColor)
  setCSSProperty('--quartenary-color', fourthPaletColors.quartenaryColor)
}

function fifthPalet() {
  const fifthPaletColors = {
    primaryColor: '#AD8B73',
    secondaryColor: '#CEAB93',
    tertiaryColor: '#E3CAA5',
    quartenaryColor: '#FFFBE9'
  }

  setCSSProperty('--primary-color', fifthPaletColors.primaryColor)
  setCSSProperty('--secondary-color', fifthPaletColors.secondaryColor)
  setCSSProperty('--tertiary-color', fifthPaletColors.tertiaryColor)
  setCSSProperty('--quartenary-color', fifthPaletColors.quartenaryColor)
}

function sixthPalet() {
  const sixthPaletColors = {
    primaryColor: '#E3FDFD',
    secondaryColor: '#CBF1F5',
    tertiaryColor: '#A6E3E9',
    quartenaryColor: '#71C9CE'
  }

  setCSSProperty('--primary-color', sixthPaletColors.primaryColor)
  setCSSProperty('--secondary-color', sixthPaletColors.secondaryColor)
  setCSSProperty('--tertiary-color', sixthPaletColors.tertiaryColor)
  setCSSProperty('--quartenary-color', sixthPaletColors.quartenaryColor)
}

////////////////////////////////////////////////////////////////////////////////////
const formMyLanguages = document.getElementById('myLanguages')

formMyLanguages.addEventListener('change', function (e) {
  e.preventDefault()
  let inptChecked = document.querySelector('input[name="myLanguages"]:checked')

  const selectedValue = window.selectedValue
  switch (inptChecked.id) {
    case 'me':
      switch (selectedValue) {
        case 'Portuguese':
          let aboutMeT = Portuguese()
          aboutMe.innerHTML = aboutMeT.RmsgAboutMe
          break
        case 'English':
          let aboutMeTE = English()
          aboutMe.innerHTML = aboutMeTE.ERmsgAboutMe
          break
      }
      break
    //////////////////////////
    case 'myLanguageHTML':
      switch (selectedValue) {
        case 'Portuguese':
          let aboutMeT = Portuguese()
          aboutMe.textContent = aboutMeT.RmsgAboutMeHtml
          break
        case 'English':
          let aboutMeTE = English()
          aboutMe.textContent = aboutMeTE.ERmsgAboutMeHtml
          break
      }
      break
    //////////////////////////
    case 'myLanguageCSS':
      switch (selectedValue) {
        case 'Portuguese':
          let aboutMeT = Portuguese()
          aboutMe.textContent = aboutMeT.RmsgAboutMeCss
          break
        case 'English':
          let aboutMeTE = English()
          aboutMe.textContent = aboutMeTE.ERmsgAboutMeCss
          break
      }
      break
    case 'myLanguageJS':
      switch (selectedValue) {
        case 'Portuguese':
          let aboutMeT = Portuguese()
          aboutMe.textContent = aboutMeT.RmsgAboutMeJs
          break
        case 'English':
          let aboutMeTE = English()
          aboutMe.textContent = aboutMeTE.ERmsgAboutMeJs
          break
      }
      break
    case 'myLanguageNODE':
      switch (selectedValue) {
        case 'Portuguese':
          let aboutMeT = Portuguese()
          aboutMe.textContent = aboutMeT.RmsgAboutMeNode
          break
        case 'English':
          let aboutMeTE = English()
          aboutMe.textContent = aboutMeTE.ERmsgAboutMeNode
          break
      }
      break
  }
})

const btnPhone = document.getElementById('btnPhone')
const myNumber = '11932640602'
btnPhone.addEventListener('click', function () {
  navigator.clipboard.writeText(myNumber).then(function () {
    alert('Numero Copiado!')
  })
})

const btnMail = document.getElementById('btnMail')
const myEmail = 'joaovitordiasti@gmail.com'
btnMail.addEventListener('click', function () {
  navigator.clipboard.writeText(myEmail).then(function () {
    alert('Email Copiado!')
  })
})
