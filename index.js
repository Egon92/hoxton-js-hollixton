const state ={
    store:[]
}

// Here's the header template which we create
/* <header>
        <ul class="header-elements">
            <ul class="left-header">
                <li id="left-header-app-name">
                    Hollixton
                </li>
                <nav id="left-header-nav-bar">
                    <span class="nav-item">Girls</span>
                    <span class="nav-item">Guys</span>
                    <span class="nav-item">Sale</span>
                </nav>
            </ul>
            <ul class="right-header">
                <li class="right-header-item"><img class="right-header-item-icon" id="mag-glass" src="/assets/search_black_48dp.svg" alt=""></li>
                <li class="right-header-item"><img class="right-header-item-icon" id="profile-acc" src="/assets/person_black_36dp.svg" alt=""></li>
                <li class="right-header-item"><img class="right-header-item-icon" id="shop-bag" src="/assets/shopping_bag_black_48dp.svg" alt=""></li>
            </ul>
        </ul>
    </header> */
    const header = document.createElement(`header`)

function renderHeader(){


    const headerElements = document.createElement(`ul`)
    headerElements.setAttribute(`class`,`header-elements`)

    const leftHeader = document.createElement(`ul`)
    leftHeader.setAttribute(`class`,`left-header`)

    const appName = document.createElement(`li`)
    appName.setAttribute(`id`,`left-header-app-name`)
    appName.textContent = `Hollixton`
    console.log(appName)

    const navBar = document.createElement(`nav`)
    navBar.setAttribute(`id`,`left-header-nav-bar`)

    const span1 = document.createElement(`span`)
    span1.setAttribute(`class`,`nav-item`)
    span1.textContent = `Girls`

    const span2 = document.createElement(`span`)
    span2.setAttribute(`class`,`nav-item`)
    span2.textContent = `Guys`

    const span3 = document.createElement(`span`)
    span3.setAttribute(`class`,`nav-item`)
    span3.textContent = `Sale`

    navBar.append(span1, span2, span3)

    const rightHeader = document.createElement(`ul`)
    rightHeader.setAttribute(`class`,`right-header`)

    const rightHeaderItem1 = document.createElement(`li`)
    rightHeaderItem1.setAttribute(`class`,`right-header-item`)
    const rightHeaderItemIcon1 = document.createElement(`img`)
    rightHeaderItemIcon1.setAttribute(`class`,`right-header-item-icon`)
    rightHeaderItemIcon1.setAttribute(`id`,`mag-glass`)
    rightHeaderItemIcon1.setAttribute(`src`,`/assets/search_black_48dp.svg`)

    const rightHeaderItem2 = document.createElement(`li`)
    rightHeaderItem2.setAttribute(`class`,`right-header-item`)
    const rightHeaderItemIcon2 = document.createElement(`img`)
    rightHeaderItemIcon2.setAttribute(`class`,`right-header-item-icon`)
    rightHeaderItemIcon2.setAttribute(`id`,`profile-acc`)
    rightHeaderItemIcon2.setAttribute(`src`,`/assets/person_black_36dp.svg`)

    const rightHeaderItem3 = document.createElement(`li`)
    rightHeaderItem3.setAttribute(`class`,`right-header-item`)
    const rightHeaderItemIcon3 = document.createElement(`img`)
    rightHeaderItemIcon3.setAttribute(`class`,`right-header-item-icon`)
    rightHeaderItemIcon3.setAttribute(`id`,`shop-bag`)
    rightHeaderItemIcon3.setAttribute(`src`,`/assets/shopping_bag_black_48dp.svg`)

    rightHeaderItem1.append(rightHeaderItemIcon1)

    rightHeaderItem2.append(rightHeaderItemIcon2)

    rightHeaderItem3.append(rightHeaderItemIcon3)

    leftHeader.append(appName, navBar)

    rightHeader.append(rightHeaderItem1, rightHeaderItem2, rightHeaderItem3)

    headerElements.append(leftHeader, rightHeader)

    header.append(headerElements)

    document.body.append(header)
}


// Here's the main template which we create
/* <main>
        <h3 id="home-h3">Home</h3>
        <section class="container">
            <div class="shop-item-card">
                <div class="new-item-note"><span id="note">New!</span></div>
                <img class="shop-item-card-image" src="https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1" alt="">
                <div class="shop-item-card-title">Crewneck T-Shirt 3-Pack</div>
                <div class="shop-item-card-price">£21.99</div>
            </div>
        </section>
    </main> */
    const main = document.createElement(`main`)

function renderContainer(){


    const homeH3El = document.createElement(`h3`)
    homeH3El.setAttribute(`id`,`home-h3`)
    homeH3El.textContent = `Home`

    const container = document.createElement(`section`)
    container.setAttribute(`class`,`container`)

    const shopItemCard = document.createElement(`div`)
    shopItemCard.setAttribute(`class`,`shop-item-card`)

    const newItemNote = document.createElement(`div`)
    newItemNote.setAttribute(`class`,`new-item-note`)

    const note = document.createElement(`span`)
    note.setAttribute(`id`,`note`)
    note.textContent = "New!"

    newItemNote.append(note)

    const shopItemCardImage = document.createElement(`img`)
    shopItemCardImage.setAttribute(`class`,`shop-item-card-image`)
    shopItemCardImage.setAttribute(`src`,`https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1`)

    const shopItemCardTitle = document.createElement(`div`)
    shopItemCardTitle.setAttribute(`class`,`shop-item-card-title`)
    shopItemCardTitle.textContent = `Crewneck T-Shirt 3-Pack`

    const shopItemCardPrice = document.createElement(`price`)
    shopItemCardPrice.setAttribute(`class`,`shop-item-card-price`)
    shopItemCardPrice.textContent = `£21.99`

    shopItemCard.append(newItemNote, shopItemCardImage, shopItemCardTitle, shopItemCardPrice)

    container.append(shopItemCard)

    main.append(homeH3El, container)

    document.body.append(main)
}


// Here's the footer template which we create
/* <footer>
        <ul class="footer-items">

            <li id="footer-items-app-name">
                Hollixton
            </li>

            <li class="country">
                <div id="country-flag"><img id="flag"  src="/assets/Flag_of_Albania.svg"></div>
                <span id="country-name">Albania</span>

            </li>
        </ul>
    </footer> */
    const footer = document.createElement(`footer`)
function renderFooter(){
    

    const footerItems = document.createElement(`ul`)
    footerItems.setAttribute(`class`,`footer-items`)
    
    const footerAppName = document.createElement(`li`)
    footerAppName.setAttribute(`id`,`footer-items-app-name`)
    footerAppName.textContent = `Hollixton`

    const country = document.createElement(`li`)
    country.setAttribute(`class`,`country`)

    const countryFlag = document.createElement(`div`)
    countryFlag.setAttribute(`id`,`country-flag`)
    const flag = document.createElement(`img`)
    flag.setAttribute(`id`,`flag`)
    flag.setAttribute(`src`,`/assets/Flag_of_Albania.svg`)

    countryFlag.append(flag)

    const countryName = document.createElement(`span`)
    countryName.setAttribute(`id`,`country-name`)
    countryName.textContent = `Albania`

    country.append(countryFlag, countryName)

    footerItems.append(footerAppName, country)

    footer.append(footerItems)

    document.body.append(footer)
}
function render(){
    document.body.innerHTML= ''
    renderHeader()
    renderContainer()
    renderFooter()
}
render()
