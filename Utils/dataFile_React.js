exports.reactGlobal = {

    searchIcon : $('div.title-right > div > button'),
    // searchIcon : $("[class*='icon-search']"),
    titleLeft : $("[class*= 'title-left']"),
    searchTextField : $('div.input-wrapper.input-search.position-relative'),
    fakeData : 'Isai',
    datePicker : $("[class*= 'react-datepicker-ignore']"),
    datePickerCross : $("[class*='react-datepicker__close-icon']")

};

exports.reactLogin = {

    userName : element(by.name('username')),
    password : element(by.name('password')),
    logInButton : $('button[type="button"]'),
    errorOnLogin : $("[class*='error']"),
    validPassword : '12345678',
    validUser : 'adhikariparul1807+test@gmail.com',
    headerLogo : $("[class*='logo']"),
    admin : 'https://admin-staging.catalog.cc/',
    loggedUser : $("[class*='logged-username d-inline-block']"),
    loggedUserName : 'Parul 1807 Adhikari',
    analyticsNavigation : $("[class*='analytics']"),
};

exports.reactContentRequest = {

    crNavigation : $("[class*='content-requests']"),
    crTitle : 'Content requests',
    brandName : $('div.table-column.large-column > div > span:nth-child(1)'),
    crCreator : $('div.table-column.large-column > div > span:nth-child(2)'),
    categories : $('div:nth-child(3) > div > span'),
    status : $('div:nth-child(4) > div > span'),
    submissionDate : $(' div:nth-child(5) > div > span'),
    viewShotList : $('[href*="/shots?q="]'),
    category_1 : 'Stylized Hero',
    category_2 : 'Swatch',
    status_1 : 'Ship products',
    channel : 'Instagram',
    addNewCr : $('div > div > div > button'),

    //Edit drawer
    crId : $("[class*='shot-meta']"),
    statusDropDown : $("[class*='dropdown-trigger']"),
    selectedBrand : $('div:nth-child(2) > div > div.dropdown-display > div'),
    selectedChannel : $('#general > div:nth-child(3) > div > div.dropdown-display > div:nth-child(1)'),
    addBrand : element(by.css('[placeholder = "Select brand"]')),
    selectFirstBrand : $('div:nth-child(2) > div > div.dropdown-options > button:nth-child(1) > div > span'),
    addChannels : element(by.css('[placeholder = "Select channels"]')),
    selectFirstChannel : $('div:nth-child(3) > div > div.dropdown-options > button:nth-child(1) > div > span'),
    crossIconSingle : $('div:nth-child(2) > div > div.dropdown-display > div > i'),
    commentButton : $('div.comment-area > button'),


};
