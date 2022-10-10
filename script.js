
//Creates new ABC
var page = new ABC({
    "type": "overwrite", //Blank, blob, or overwrite
    "url": "https://soggy.monacanhumanities.net" //Any url
})
//Set the type
page.setType("overwrite")
//Set the url
page.setUrl("https://soggy.monacanhumanities.net")
//Get iframe code
console.log(page.getCode())
//Open page
page.open()
