
//Creates new ABC
var page = new ABC({
    "type": "Blank", //Blank, blob, or overwrite
    "url": "https://chromebook.ccpsadmin.net" //Any url
})
//Set the type
page.setType("Blank")
//Set the url
page.setUrl("https://chromebook.ccpsadmin.net")
//Get iframe code
console.log(page.getCode())
//Open page
page.open()
