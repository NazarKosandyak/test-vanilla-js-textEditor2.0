// TEXT STYLING

let counter = 1
let setBold = document.querySelector('.first')

setBold.addEventListener('click', function (e) {
    e.preventDefault()

    if (counter == 1) {
        getP.style.fontWeight = 'bold'
        setBold.style.border = '2px solid blue'
        counter++
    } else {
        getP.style.fontWeight = 'normal'
        setBold.style.border = 'none'
        counter = 1
    }


})
let setItalic = document.querySelector('.italic')
setItalic.addEventListener('click', function (e) {
    e.preventDefault()
    if (counter == 1) {
        getP.style.fontStyle = 'italic'
        setItalic.style.border = '2px solid red'
        counter++
    } else {
        getP.style.fontStyle = 'normal'
        setItalic.style.border = 'none'
        counter = 1
    }
})
let setUnderline = document.querySelector('.underline')
setUnderline.addEventListener('click', function (e) {
    e.preventDefault()
    if (counter == 1) {
        getP.style.textDecoration = 'underline'
        setUnderline.style.border = '2px solid green'
        counter++
    } else {
        getP.style.textDecoration = 'none'
        setUnderline.style.border = 'none'
        counter = 1
    }
})
let setLineThroght = document.querySelector('.last')
setLineThroght.addEventListener('click', function (e) {
    e.preventDefault()
    if (counter == 1) {
        getP.style.textDecoration = 'line-through'
        setLineThroght.style.border = '2px solid brown'
        counter++
    } else {
        getP.style.textDecoration = 'none'
        setLineThroght.style.border = 'none'
        counter = 1
    }
})

let setAlign = document.querySelector('.textAlign')
setAlign.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.classList.contains('btn')) {
        getP.style.textAlign = e.target.getAttribute('name')
    }

})

let getFormStyling = document.forms.styling
getFormStyling.fonts.addEventListener('change', function () {
    for (let i = 0; i < getFormStyling.fonts.options.length; i++) {
        if (getFormStyling.fonts.options[i].selected) {
            getP.style.fontFamily = getFormStyling.fonts.options[i].value

        }

    }
})


let getFormSizing = document.forms.sizing
getFormSizing.sizeFont.addEventListener('change', function () {
    for (let i = 0; i < getFormSizing.sizeFont.options.length; i++) {
        if (getFormSizing.sizeFont.options[i].selected) {

            for (let j = 0; j < getP.children.length; j++) {
                getP.children[j].style.fontSize = getFormSizing.sizeFont.options[i].value
            }

        }

    }

})

let getBtnOpenColor = document.querySelector('.colorText')
let getModalColor = document.querySelector('.modalColors')
let getBoxColor = document.querySelector('.mainContent')
getBtnOpenColor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector('body').classList.add('dark')
    getModalColor.style.display = 'block'




})

getBoxColor.addEventListener('click', function (el) {
    el.preventDefault()
    if (el.target.classList.contains('prop')) {
        getP.style.color = getComputedStyle(el.target).color
    }




})

let getCloseBtnModal = document.querySelector('.closeBtn')
getCloseBtnModal.addEventListener('click', function (e) {
    e.preventDefault()
    getModalColor.style.display = 'none'
    document.querySelector('body').classList.remove('dark')
})



let openModalGallery = document.querySelector('.fonText')
let modalWindow = document.querySelector('.modalWindow')
openModalGallery.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector('body').classList.add('dark')
    modalWindow.style.display = 'block'
})

let getSetColor = document.querySelector('.setColor')
let openColor = document.querySelector('.fir')

let getSetImages = document.querySelector('.setImages')
let openImage = document.querySelector('.sec')

let getSetFiles = document.querySelector('.setFiles')
let openFiles = document.querySelector('.third')

openColor.addEventListener('click', function (e) {
    e.preventDefault()
    getSetColor.style.display = 'flex'
    getSetImages.style.display = 'none'
    getSetFiles.style.display = 'none'
})


getSetColor.addEventListener('click', function (e) {
    if (e.target.classList.contains('prop')) {
        document.body.style.backgroundImage = 'none'
        document.body.style.backgroundColor = getComputedStyle(e.target).color

    }
})

openImage.addEventListener('click', function () {
    getSetImages.style.display = 'grid'
    getSetColor.style.display = 'none'
    getSetFiles.style.display = 'none'
})

getSetImages.addEventListener('click', function (e) {
    if (e.target.classList.contains('myImage')) {
        document.body.style.backgroundSize = '100%'
        document.body.style.backgroundImage = getComputedStyle(e.target).backgroundImage


    }
})

openFiles.addEventListener('click', function () {
    getSetFiles.style.display = 'flex'
    getSetColor.style.display = 'none'
    getSetImages.style.display = 'none'
})

let getFiles = document.querySelector('.myFile')

getFiles.addEventListener('change', function () {
    let fileName = document.querySelector('.myFile').files[0].name
    document.body.style.backgroundSize = "100%"
    document.body.style.backgroundImage = `url(imgForBG/${fileName})`
    modalWindow.style.display = 'none'
    getFiles.style.display = 'none'
    console.log(fileName);

})


let closeMainWindow = document.querySelector('.closeBtn2')
closeMainWindow.addEventListener('click', function () {
    document.querySelector('body').classList.remove('dark')
    modalWindow.style.display = 'none'
    getSetColor.style.display = 'none'
    getSetImages.style.display = 'none'
    getSetFiles.style.display = 'none'
})


// Робота з формою 
let regExpForName = /^\w{3,20}$/gi
let regExpForPass = /^\w{2,25}$/
let getOpenForm = document.querySelector('.logIn')
let getModalForm = document.querySelector('.myLogin')
let getLastDiv = document.querySelector('.logForm')
let getEditMenu = document.querySelector('.edit')
let getBar = document.querySelector('.bar')
let getCode = document.querySelector('.code')
let btnSub = document.querySelector('.sub')
let getP = document.querySelector('.paragraph')
let getMyForm = document.forms.validForm
let getSignOut = document.querySelector('.logOut')

let createWarning = document.createElement('div')
let getTextArea = document.querySelector('.myArea')
let con = 1

getOpenForm.addEventListener('click', function () {
    if (con == 1) {
        getModalForm.style.display = 'block'
        getOpenForm.style.backgroundImage = "url('img/open-padlock.png')"
        con++

    } else {
        getSignOut.style.display = 'block'
        let getCancel = document.querySelector('.cancel')
        getOpenForm.disabled = false

        getCancel.addEventListener('click', function () {
            getSignOut.style.display = 'none'


        })
        myBtnOut = document.querySelector('.Sign_Out')
        myBtnOut.addEventListener('click', function () {
            getOpenForm.style.backgroundImage = "url('img/lock.png')"
            getSignOut.style.display = 'none'
            getCode.disabled = true
            getCode.style.backgroundColor = 'rgb(158, 158, 158)'
            getCode.style.boxShadow = 'none'
            createWarning.remove()
            con = 1

        })

    }
})






btnSub.addEventListener('click', function (e) {
    e.preventDefault()
    let valueName = getMyForm.userName.value
    let regName = regExpForName.exec(valueName)
    let valuePass = getMyForm.userPassword.value
    let regPass = regExpForPass.exec(valuePass)

    console.log(regName);

    if (regName != null && regPass != null) {
        getMyForm.userName.style.border = '3px solid green'
        getMyForm.userPassword.style.border = '3px solid green'
        getMyForm.reset()
        getModalForm.style.display = 'none'



        getCode.disabled = false
        getCode.style.backgroundColor = '#FAA01C'
        getCode.style.boxShadow = '0px 0px 10px #FAA01C'
        createWarning.remove()


        getMyForm.userName.style.border = 'none'
        getMyForm.userPassword.style.border = 'none'
        createWarning.style.color = 'none'
        createWarning.style.fontFamily = 'none'


        getCode.addEventListener('click', function () {
            getTextArea.style.display = 'block'
            getBar.style.display = 'none'
            getEditMenu.style.display = 'flex'
            getTextArea.value = getP.innerHTML
            getP.style.display = 'none'



        })

        let getSave = document.querySelector('.save')
        getSave.addEventListener('click', function () {
            getBar.style.display = 'flex'
            getEditMenu.style.display = 'none'
            getP.innerHTML = getTextArea.value
            getP.style.display = 'block'
            getTextArea.style.display = 'none'


        })


    }

    getLastDiv.append(createWarning)
    if (valueName == '' && valuePass == '') {
        createWarning.textContent = 'Value is empty'
        createWarning.style.fontSize = '20px'
        getMyForm.userName.style.border = '3px solid red'
        getMyForm.userPassword.style.border = '3px solid red'
        createWarning.style.color = '#262840'
        createWarning.style.fontFamily = 'monospace'
    } else if (regName == null && regPass == null) {
        createWarning.textContent = 'Please check your login or password'
        createWarning.style.color = '#262840'
        createWarning.style.fontFamily = 'monospace'
        createWarning.style.fontSize = '20px'
        getMyForm.userName.style.border = '3px solid red'
        getMyForm.userPassword.style.border = '3px solid red'
    }



})




let getCloseForm = document.querySelector('.closeLog')
getCloseForm.addEventListener('click', function () {
    getModalForm.style.display = 'none'
    getOpenForm.disabled = false
    createWarning.remove()
    getOpenForm.style.backgroundImage = "url('img/lock.png')"
    getMyForm.userName.style.border = 'none'
    getMyForm.userPassword.style.border = 'none'
    createWarning.style.color = 'none'
    createWarning.style.fontFamily = 'none'
    con = 1
})



let createEmptyValue = document.createElement('div')
let getModalTable = document.querySelector('.modalTable')
let getTable = document.querySelector('.myTable')
getTable.addEventListener('click', function () {
    getModalTable.style.display = 'block'
})
let myFormCreateTable = document.forms.valueForm
let countTR = document.querySelector('.cTr')
let countTD = document.querySelector('.cTD')
let widthOfTD = document.querySelector('.wTd')
let HeightOfTD = document.querySelector('.hTd')
let WidthOfBorder = document.querySelector('.wBorder')
let getInputwBorder = document.querySelector('.wBorder')
myFormCreateTable.add.addEventListener('click', function (e) {
    e.preventDefault()


    let valueOfTR = countTR.value
    let valueOfTD = countTD.value
    let valueOfWidthTD = widthOfTD.value
    let valueOfHeighTD = HeightOfTD.value
    let valueOfWidthBorder = WidthOfBorder.value

    const regExValueTR = /^\d{1,5}$/
    const testValeuTR = regExValueTR.exec(valueOfTR)

    const regExValueTD = /^\d{1,5}$/
    const testValueTD = regExValueTD.exec(valueOfTD)

    const regExWidthTD = /^\d{1,5}$/
    const testWidthTd = regExWidthTD.exec(valueOfWidthTD)

    const regExHeightTD = /^\d{1,5}$/
    const testHeightTD = regExHeightTD.exec(valueOfHeighTD)

    const regExWidthBorder = /^\d{1,5}$/
    const testBWidth = regExWidthBorder.exec(valueOfWidthBorder)




    let getCon = document.querySelector('.con')

    if (testValeuTR == null) {
        createEmptyValue.style.fontFamily = 'Lato'
        createEmptyValue.textContent = 'value is empty'
        createEmptyValue.style.color = 'red'
        countTR.classList.add('red')
        getCon.append(createEmptyValue)
    }

    if (testValeuTR != null) {
        countTR.classList.remove('red')
        createEmptyValue.remove()
    }
    if (testValueTD == null) {
        createEmptyValue.style.fontFamily = 'Lato'
        createEmptyValue.textContent = 'value is empty'
        createEmptyValue.style.color = 'red'
        countTD.classList.add('red')
        getCon.append(createEmptyValue)
    }
    if (testValueTD != null) {
        countTD.classList.remove('red')
        createEmptyValue.remove()
    }
    if (testWidthTd == null) {
        createEmptyValue.style.fontFamily = 'Lato'
        createEmptyValue.textContent = 'value is empty'
        createEmptyValue.style.color = 'red'
        widthOfTD.classList.add('red')
        getCon.append(createEmptyValue)
    }
    if (testWidthTd != null) {
        widthOfTD.classList.remove('red')
        createEmptyValue.remove()
    }
    if (testHeightTD == null) {
        createEmptyValue.style.fontFamily = 'Lato'
        createEmptyValue.textContent = 'value is empty'
        createEmptyValue.style.color = 'red'
        HeightOfTD.classList.add('red')
        getCon.append(createEmptyValue)
    }
    if (testHeightTD != null) {
        HeightOfTD.classList.remove('red')
        createEmptyValue.remove()
    }
    if (testBWidth == null) {
        createEmptyValue.style.fontFamily = 'Lato'
        createEmptyValue.textContent = 'value is empty'
        createEmptyValue.style.color = 'red'
        WidthOfBorder.classList.add('red')
        getCon.append(createEmptyValue)
    }
    if (testBWidth != null) {
        WidthOfBorder.classList.remove('red')
        createEmptyValue.remove()
    }
    if (myFormCreateTable.stlBorder.options[0].index == 0) {
        createEmptyValue.style.fontFamily = 'Lato'
        createEmptyValue.textContent = 'value is empty'
        createEmptyValue.style.color = 'red'
        myFormCreateTable.stlBorder.classList.add('red')
        getCon.append(createEmptyValue)
    }
    if (myFormCreateTable.stlBorder.options[0].selected == false) {
        myFormCreateTable.stlBorder.classList.remove('red')
        createEmptyValue.remove()
    }

    if (myFormCreateTable.colorBr.options[0].index == 0) {
        createEmptyValue.style.fontFamily = 'Lato'
        createEmptyValue.textContent = 'value is empty'
        createEmptyValue.style.color = 'red'
        myFormCreateTable.colorBr.classList.add('red')
        getCon.append(createEmptyValue)
    }
    if (myFormCreateTable.colorBr.options[0].selected == false) {
        myFormCreateTable.colorBr.classList.remove('red')
        createEmptyValue.remove()
    }


    if (testValeuTR != null && testValueTD != null && testWidthTd != null && testHeightTD != null && testBWidth != null && myFormCreateTable.stlBorder.options[0].selected == false && myFormCreateTable.colorBr.options[0].selected == false) {
        const CREATE_TABLE = document.createElement('table')
        getP.append(CREATE_TABLE)
        for (let i = 0; i < valueOfTR; i++) {
            const CREATE_TR = document.createElement('tr')
            CREATE_TABLE.append(CREATE_TR)
            for (let j = 0; j < valueOfTD; j++) {
                const CREATE_TD = document.createElement('td')
                CREATE_TR.append(CREATE_TD)
                CREATE_TD.innerHTML = 'table'
                CREATE_TD.style.width = valueOfWidthTD + 'px'
                CREATE_TD.style.height = valueOfHeighTD + 'px'
                CREATE_TD.style.borderWidth = valueOfWidthBorder + 'px'


                for (const elem of myFormCreateTable.stlBorder.options) {
                    if (elem.selected) {
                        CREATE_TD.style.borderStyle = elem.value
                    }
                }
                for (const elemColor of myFormCreateTable.colorBr.options) {
                    if (elemColor.selected) {
                        CREATE_TD.style.borderColor = elemColor.value
                    }
                }
            }
        }
        getModalTable.style.display = 'none'
        getTextArea.value = getP.innerHTML
        myFormCreateTable.reset()
        createEmptyValue.remove()
    }



})

let getReset = document.querySelector('.resetForm')
getReset.addEventListener('click', function (e) {
    e.preventDefault()
    countTR.classList.remove('red')
    countTD.classList.remove('red')
    widthOfTD.classList.remove('red')
    HeightOfTD.classList.remove('red')
    WidthOfBorder.classList.remove('red')
    myFormCreateTable.stlBorder.classList.remove('red')
    myFormCreateTable.colorBr.classList.remove('red')
    myFormCreateTable.reset()
    createEmptyValue.remove()

})

let closeTableModal = document.querySelector('.closeTable')
closeTableModal.addEventListener('click', function () {
    getModalTable.style.display = 'none'
    createEmptyValue.remove()
    myFormCreateTable.reset()
    countTR.classList.remove('red')
    countTD.classList.remove('red')
    widthOfTD.classList.remove('red')
    HeightOfTD.classList.remove('red')
    WidthOfBorder.classList.remove('red')
    myFormCreateTable.stlBorder.classList.remove('red')
    myFormCreateTable.colorBr.classList.remove('red')
})


let openModal = document.querySelector('.createNumericList')
let getOpen = document.querySelector('.modalOl')
let getFormOl = document.forms.createOl
let getInputOl = document.querySelector('.countLi')
openModal.addEventListener('click', function () {
    getOpen.style.display = 'block'
})
let getMainOl = document.querySelector('.mainOl')
getFormOl.createOl.addEventListener('click', function (e) {
    e.preventDefault()
    let createOl = document.createElement('ol')
    let countli = getFormOl.countLi.value
    let regExconOl = /^\d{1,5}$/
    let testOl = regExconOl.exec(countli)
    console.log(testOl);


    if (testOl == null) {
        createEmptyValue.textContent = 'Value is empty'
        createEmptyValue.style.color = 'red'
        createEmptyValue.style.fontFamily = 'Lato'
        getInputOl.classList.add('red')
        getMainOl.append(createEmptyValue)
    }
    if (testOl != null) {
        getInputOl.classList.remove('red')
        createEmptyValue.remove()
    }
    if (getFormOl.typeMark.options[0].index == 0) {
        createEmptyValue.textContent = 'Value is empty'
        createEmptyValue.style.color = 'red'
        createEmptyValue.style.fontFamily = 'Lato'
        getFormOl.typeMark.classList.add('red')
        getMainOl.append(createEmptyValue)
    }
    if (getFormOl.typeMark.options[0].selected == false) {
        getFormOl.typeMark.classList.remove('red')
        createEmptyValue.remove()
    }
    if (testOl != null && getFormOl.typeMark.options[0].selected == false) {
        getP.append(createOl)
        getInputOl.classList.remove('red')
        for (let j = 0; j < countli; j++) {
            let createLi = document.createElement('li')
            createLi.textContent = `item${j}`
            createOl.append(createLi)
        }

        for (let k = 0; k < getFormOl.typeMark.options.length; k++) {
            if (getFormOl.typeMark.options[k].selected) {
                createOl.style.listStyleType = getFormOl.typeMark.options[k].value
            }
        }
        createOl.style.margin = '10px'
        getOpen.style.display = 'none'
        getTextArea.value = getP.innerHTML
        getFormOl.reset()
        createEmptyValue.remove()
    }
})


let getCloseOl = document.querySelector('.closeOl')
getCloseOl.addEventListener('click', function (e) {
    e.preventDefault()
    getOpen.style.display = 'none'
    getInputOl.classList.remove('red')
    getFormOl.typeMark.classList.remove('red')
    getFormOl.reset()
    createEmptyValue.remove()
})


let getResetOl = document.querySelector('.resetField')
getResetOl.addEventListener('click', function (e) {
    e.preventDefault()
    getFormOl.reset()
    getInputOl.classList.remove('red')
    getFormOl.typeMark.classList.remove('red')
    createEmptyValue.remove()
})





let openUl = document.querySelector('.myDotList')
let getModalUl = document.querySelector('.modalUl')
let getFormUl = document.forms.formUl
let getMainUl = document.querySelector('.mainUl')
let getInputIl = document.querySelector('.countLi2')
openUl.addEventListener('click', function (e) {
    e.preventDefault()
    getModalUl.style.display = 'block'
})
getFormUl.createUl.addEventListener('click', function (e) {
    e.preventDefault()
    let createUl = document.createElement('ul')
    let valueUl = getFormUl.countLi2.value
    let regExcoLi = /^\d{1,5}$/
    let testRegUl = regExcoLi.exec(valueUl)


    if (testRegUl == null) {
        createEmptyValue.textContent = 'Value is empty'
        createEmptyValue.style.color = 'red'
        createEmptyValue.style.fontFamily = 'Lato'
        getInputIl.classList.add('red')
        getMainUl.append(createEmptyValue)
    }
    if (testRegUl != null) {
        getInputIl.classList.remove('red')
        createEmptyValue.remove()
    }
    if (getFormUl.typeMarkUl.options[0].index == 0) {
        createEmptyValue.textContent = 'Value is empty'
        createEmptyValue.style.color = 'red'
        createEmptyValue.style.fontFamily = 'Lato'
        getFormUl.typeMarkUl.classList.add('red')
        getMainUl.append(createEmptyValue)
    }
    if (getFormUl.typeMarkUl.options[0].selected == false) {
        getFormUl.typeMarkUl.classList.add('red')
        createEmptyValue.remove()
    }
    if (testRegUl != null && getFormUl.typeMarkUl.options[0].selected == false) {
        getP.append(createUl)
        for (let i = 0; i < valueUl; i++) {
            let createMylI = document.createElement('li')
            createUl.append(createMylI)
            createMylI.textContent = `item${i}`

        }
        for (let j = 0; j < getFormUl.typeMarkUl.options.length; j++) {
            if (getFormUl.typeMarkUl.options[j].selected) {
                createUl.style.listStyleType = getFormUl.typeMarkUl.options[j].value
            }
        }
        createUl.style.margin = '10px'
        getModalUl.style.display = 'none'
        getTextArea.value = getP.innerHTML
        getInputIl.classList.remove('red')
        getFormUl.typeMarkUl.classList.remove('red')
        createEmptyValue.remove()
        getFormUl.reset()
    }
})


let getCloseUL = document.querySelector('.closeUL')
getCloseUL.addEventListener('click', function (e) {
    e.preventDefault()
    getModalUl.style.display = 'none'
    getInputIl.classList.remove('red')
    getFormUl.typeMarkUl.classList.remove('red')
    createEmptyValue.remove()
    getFormUl.reset()
})


let getResetUl = document.querySelector('.resetField1')
getResetUl.addEventListener('click', function (e) {
    e.preventDefault()
    getInputIl.classList.remove('red')
    getFormUl.typeMarkUl.classList.remove('red')
    getFormUl.reset()
    createEmptyValue.remove()
})