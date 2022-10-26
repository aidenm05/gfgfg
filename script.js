
//Creates new ABC
var page = new ABC({
    "type": "blank", //Blank, blob, or overwrite
    "url": "https://chromebook.ccpsadmin.net" //Any url
})
//Set the type
page.setType("blank")
//Set the url
page.setUrl("https://chromebook.ccpsadmin.net")
//Get iframe code
console.log(page.getCode())
//Open page
page.open()
