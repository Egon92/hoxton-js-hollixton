const state = {
    store: [],
    selectedProduct: null
}
//SERVER FUNCTIONS
function getStoreItems() {
    return fetch(`http://localhost:3000/store`)
        .then(function (resp) {
            return resp.json()
        }).then(function (store) {
            return state.store = store
        })
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


function renderHeader() {

    const header = document.createElement(`header`)

    const headerElements = document.createElement(`ul`)
    headerElements.setAttribute(`class`, `header-elements`)

    const leftHeader = document.createElement(`ul`)
    leftHeader.setAttribute(`class`, `left-header`)

    const appName = document.createElement(`li`)
    appName.setAttribute(`id`, `left-header-app-name`)
    appName.textContent = `Hollixton`
    appName.addEventListener(`click`, function () {
        state.selectedProduct = null
        render()
    })

    const navBar = document.createElement(`nav`)
    navBar.setAttribute(`id`, `left-header-nav-bar`)

    const span1 = document.createElement(`span`)
    span1.setAttribute(`class`, `nav-item`)
    span1.textContent = `Girls`

    const span2 = document.createElement(`span`)
    span2.setAttribute(`class`, `nav-item`)
    span2.textContent = `Guys`

    const span3 = document.createElement(`span`)
    span3.setAttribute(`class`, `nav-item`)
    span3.textContent = `Sale`

    navBar.append(span1, span2, span3)

    const rightHeader = document.createElement(`ul`)
    rightHeader.setAttribute(`class`, `right-header`)

    const rightHeaderItem1 = document.createElement(`li`)
    rightHeaderItem1.setAttribute(`class`, `right-header-item`)
    const rightHeaderItemIcon1 = document.createElement(`img`)
    rightHeaderItemIcon1.setAttribute(`class`, `right-header-item-icon`)
    rightHeaderItemIcon1.setAttribute(`id`, `mag-glass`)
    rightHeaderItemIcon1.setAttribute(`src`, `./assets/search_black_48dp.svg`)

    const rightHeaderItem2 = document.createElement(`li`)
    rightHeaderItem2.setAttribute(`class`, `right-header-item`)
    const rightHeaderItemIcon2 = document.createElement(`img`)
    rightHeaderItemIcon2.setAttribute(`class`, `right-header-item-icon`)
    rightHeaderItemIcon2.setAttribute(`id`, `profile-acc`)
    rightHeaderItemIcon2.setAttribute(`src`, `./assets/person_black_36dp.svg`)

    const rightHeaderItem3 = document.createElement(`li`)
    rightHeaderItem3.setAttribute(`class`, `right-header-item`)
    const rightHeaderItemIcon3 = document.createElement(`img`)
    rightHeaderItemIcon3.setAttribute(`class`, `right-header-item-icon`)
    rightHeaderItemIcon3.setAttribute(`id`, `shop-bag`)
    rightHeaderItemIcon3.setAttribute(`src`, `./assets/shopping_bag_black_48dp.svg`)

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
                <div class="shop-item-card-price"><span class = "actual-price">£40</span><span class="discount-price">£21.99</span></div>
            </div>
        </section>
    </main> */

function renderMain() {
    const main = document.createElement(`main`)

    if (state.selectedProduct !== null) {
        renderSelectedProduct(main)
    } else {
        renderShopItems(main)
    }


    document.body.append(main)
}

function renderSelectedProduct(main) {
    // <section class="product-container">
    //     <div class="product-image">
    //         <img class="item-image" src="https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1" alt="">
    //     </div>
    //     <div class="product-name-and-add-button">
    //         <span class="product-title">Crewneck T-Shirt 3-Pack</span>
    //         <button type="submit" class="add-button">ADD TO BAG</button>
    //     </div>
    // </section>

    const productContainer = document.createElement(`section`)
    productContainer.setAttribute(`class`, `product-container`)

    const productImage = document.createElement(`div`)
    productImage.setAttribute(`class`, `product-image`)

    const itemImage = document.createElement(`img`)
    itemImage.setAttribute(`class`, `item-image`)
    itemImage.setAttribute(`src`, state.selectedProduct.image)

    productImage.append(itemImage)

    const productNameAndButton = document.createElement(`div`)
    productNameAndButton.setAttribute(`class`, `product-name-and-add-button`)

    const productTitle = document.createElement(`span`)
    productTitle.setAttribute(`class`, `product-title`)
    productTitle.textContent = state.selectedProduct.name

    const addButton = document.createElement(`button`)
    addButton.setAttribute(`class`, `add-button`)
    addButton.setAttribute(`type`, `submit`)
    addButton.textContent = `ADD TO BAG`

    productNameAndButton.append(productTitle, addButton)

    productContainer.append(productImage, productNameAndButton)

    main.append(productContainer)
}

function renderShopItems(main) {
    const homeH3El = document.createElement(`h3`)
    homeH3El.setAttribute(`id`, `home-h3`)
    homeH3El.textContent = `Home`

    const container = document.createElement(`section`)
    container.setAttribute(`class`, `container`)

    for (const item of state.store) {
        shopItemCard(item, container)
    }

    main.append(homeH3El, container)
}

function isNewItemOrNot(item) {
    const s = 1000
    const m = s * 60
    const h = m * 60
    const d = h * 24
    const interv = d * 10
    const isNewItemLimit = Date.now() - interv

    return Date.parse(item.dateEntered) >= isNewItemLimit
}

function shopItemCard(item, container) {
    // "id": 1,
    //   "type": "Guys",
    //   "name": "Crewneck T-Shirt 3-Pack",
    //   "image": "https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1",
    //   "price": 40,
    //   "discountedPrice": 21.99,
    //   "dateEntered": "2021/08/10",
    //   "stock": 10

    const shopItemCard = document.createElement(`div`)
    shopItemCard.setAttribute(`class`, `shop-item-card`)

    shopItemCard.addEventListener(`click`, function () {
        state.selectedProduct = item
        render()
    })

    const newItemNote = document.createElement(`div`)
    newItemNote.setAttribute(`class`, `new-item-note`)

    const newNote = isNewItemOrNot(item)


    if (newNote) {
        const note = document.createElement(`span`)
        note.setAttribute(`id`, `note`)
        note.textContent = `New!`
        newItemNote.append(note)
    }


    const shopItemCardImage = document.createElement(`img`)
    shopItemCardImage.setAttribute(`class`, `shop-item-card-image`)
    shopItemCardImage.setAttribute(`src`, item.image)

    const shopItemCardTitle = document.createElement(`div`)
    shopItemCardTitle.setAttribute(`class`, `shop-item-card-title`)
    shopItemCardTitle.textContent = item.name

    const shopItemCardPrice = document.createElement(`div`)
    shopItemCardPrice.setAttribute(`class`, `shop-item-card-price`)


    const shopItemActualPrice = document.createElement(`span`)
    shopItemActualPrice.setAttribute(`class`, `actual-price`)
    shopItemActualPrice.textContent = `£${item.price}`

    shopItemCardPrice.append(shopItemActualPrice)

    if (item.discountedPrice) {
        shopItemActualPrice.classList.add(`discounted`)
        const shopItemDiscountPrice = document.createElement(`span`)
        shopItemDiscountPrice.setAttribute(`class`, `discount-price`)
        shopItemDiscountPrice.textContent = `£${item.discountedPrice}`
        shopItemCardPrice.append(shopItemDiscountPrice)
    }


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


function renderFooter() {

    const footer = document.createElement(`footer`)

    const footerItems = document.createElement(`ul`)
    footerItems.setAttribute(`class`, `footer-items`)

    const footerAppName = document.createElement(`li`)
    footerAppName.setAttribute(`id`, `footer-items-app-name`)
    footerAppName.textContent = `Hollixton`

    const country = document.createElement(`li`)
    country.setAttribute(`class`, `country`)

    const countryFlag = document.createElement(`div`)
    countryFlag.setAttribute(`id`, `country-flag`)
    const flag = document.createElement(`img`)
    flag.setAttribute(`id`, `flag`)
    flag.setAttribute(`src`, `./assets/Flag_of_Albania.svg`)

    countryFlag.append(flag)

    const countryName = document.createElement(`span`)
    countryName.setAttribute(`id`, `country-name`)
    countryName.textContent = `Albania`

    country.append(countryFlag, countryName)

    footerItems.append(footerAppName, country)

    footer.append(footerItems)

    document.body.append(footer)
}

function render() {
    document.body.innerHTML = ''
    renderHeader()
    renderMain()
    renderFooter()
}

function init() {
    render()
    getStoreItems().then(function (resp) {
        render()
    })


}
init()