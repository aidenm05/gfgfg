
//Creates new ABC
var page = new ABC({
    "type": "overwhrite", //Blank, blob, or overwrite
    "url": "https://chromebook.ccpsadmin.net" //Any url
})
//Set the type
page.setType("blob")
//Set the url
page.setUrl("https://chromebook.ccpsadmin.net")
//Get iframe code
console.log(page.getCode())
//Open page
page.open()
