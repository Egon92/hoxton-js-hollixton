const state ={
    store:[
        {
            "id": 1,
            "type": "Guys",
            "name": "Crewneck T-Shirt 3-Pack",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1",
            "price": 40,
            "discountedPrice": 21.99,
            "dateEntered": "2021/08/10",
            "stock": 10
          },
          {
            "id": 2,
            "type": "Girls",
            "name": "Smocked Tiered Mini Dress",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_359-1220-1911-805_prod1",
            "price": 29,
            "dateEntered": "2021/07/10",
            "stock": 5
          },
          {
            "id": 3,
            "type": "Girls",
            "name": "Gilly Hicks Cozy Joggers",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_346-1252-0485-116_prod1",
            "price": 27,
            "dateEntered": "2021/05/06",
            "stock": 15
          },
          {
            "id": 4,
            "type": "Guys",
            "name": "Gilly Hicks Go Energize 2-in-1 Running Short",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_346-1614-0521-900_prod1",
            "price": 29,
            "dateEntered": "2021/07/10",
            "stock": 20
          },
          {
            "id": 5,
            "type": "Guys",
            "name": "Gilly Hicks Woven Boxer",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_309-1408-0413-136_prod1",
            "price": 12,
            "dateEntered": "2021/07/10",
            "stock": 2
          },
          {
            "id": 6,
            "type": "Guys",
            "name": "Gilly Hicks Smiley Socks 2-Pack",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_354-1020-0010-900_prod1",
            "price": 14,
            "dateEntered": "2021/06/11",
            "stock": 1
          },
          {
            "id": 7,
            "type": "Guys",
            "name": "Stretch Poplin Slim Fit shirt",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_325-1072-0609-214_prod1",
            "price": 29,
            "discountedPrice": 20.3,
            "dateEntered": "2020/02/10",
            "stock": 13
          },
          {
            "id": 8,
            "type": "Guys",
            "name": "Must-Have Crewneck T-Shirt 5-Pack",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_324-1072-0132-108_prod1",
            "price": 55,
            "discountedPrice": 34.99,
            "dateEntered": "2021/08/10",
            "stock": 12
          },
          {
            "id": 9,
            "type": "Guys",
            "name": "Print Logo Graphic Tee",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_323-1957-2978-908_prod1",
            "price": 25,
            "discountedPrice": 11.99,
            "dateEntered": "2021/04/10",
            "stock": 17
          },
          {
            "id": 10,
            "type": "Girls",
            "name": "Ultra High-Rise Dad Sweatpants",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_347-1074-0669-100_prod1",
            "price": 35,
            "discountedPrice": 14.99,
            "dateEntered": "2021/08/01",
            "stock": 6
          },
          {
            "id": 11,
            "type": "Girls",
            "name": "Crop Oversized Hoodie",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_352-3541-0604-100_prod1",
            "price": 35,
            "discountedPrice": 12.99,
            "dateEntered": "2021/08/01",
            "stock": 8
          },
          {
            "id": 12,
            "type": "Girls",
            "name": "Gilly Hicks Socks 2-Pack",
            "image": "https://img.hollisterco.com/is/image/anf/KIC_354-1013-0002-100_prod1",
            "price": 14,
            "discountedPrice": 5.99,
            "dateEntered": "2021/07/10",
            "stock": 10
          }
    ]
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
                <div class="shop-item-card-price">£40<span class="discount-price">£21.99</span></div>
            </div>
        </section>
    </main> */

function renderMain(){
    const main = document.createElement(`main`)
    
    const homeH3El = document.createElement(`h3`)
    homeH3El.setAttribute(`id`,`home-h3`)
    homeH3El.textContent = `Home`

    const container = document.createElement(`section`)
    container.setAttribute(`class`,`container`)

    for(const item of state.store){
        shopItemCard(item, container)
    }

    main.append(homeH3El, container)

    document.body.append(main)
}

function shopItemCard(item, container){
    // "id": 1,
    //   "type": "Guys",
    //   "name": "Crewneck T-Shirt 3-Pack",
    //   "image": "https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1",
    //   "price": 40,
    //   "discountedPrice": 21.99,
    //   "dateEntered": "2021/08/10",
    //   "stock": 10

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
    shopItemCardImage.setAttribute(`src`,item.image)

    const shopItemCardTitle = document.createElement(`div`)
    shopItemCardTitle.setAttribute(`class`,`shop-item-card-title`)
    shopItemCardTitle.textContent = item.name

    const shopItemCardPrice = document.createElement(`div`)
    shopItemCardPrice.setAttribute(`class`,`shop-item-card-price`)
    shopItemCardPrice.textContent = `£${item.price}`

    const shopItemDiscountPrice = document.createElement(`span`)
    shopItemDiscountPrice.setAttribute(`class`,`discount-price`)
    shopItemDiscountPrice.textContent = `£${item.discountedPrice}`

    shopItemCardPrice.append(shopItemDiscountPrice)

    shopItemCard.append(newItemNote, shopItemCardImage, shopItemCardTitle, shopItemCardPrice)

    container.append(shopItemCard)
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
    renderMain()
    renderFooter()
}
render()

