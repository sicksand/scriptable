// Corona Widget by Shafiq Mustapa
// by @shafiqmustapa
// like what I do? buy me a coffee -> https://www.buymeacoffee.com/9itd16a

// HOW TO
// 1) Install Scriptable @ https://apps.apple.com/us/app/scriptable/id1405459188
// 2) Copy this entire script in to Scriptable (tip: you can send it to your iPhone via Whatsapp/Messenger/Telegram etc)

const url = https://coronavirus-19-api.herokuapp.com/countries/Malaysia
const req = new Request(url)
const res = await req.loadJSON()


// create and show widget
let widget = createWidget("Coronavirus", ${res.todayCases} Today, ${res.cases} Total, "#53d769")
Script.setWidget(widget)
Script.complete()


function createWidget(pretitle, title, subtitle, color) {
  let w = new ListWidget()
  w.backgroundColor = new Color(color)
  let preTxt = w.addText(pretitle)
  preTxt.textColor = Color.white()
  preTxt.textOpacity = 0.8
  preTxt.font = Font.systemFont(16)
  w.addSpacer(5)
  let titleTxt = w.addText(title)
  titleTxt.textColor = Color.white()
  titleTxt.font = Font.systemFont(22)
  w.addSpacer(5)
  let subTxt = w.addText(subtitle)
  subTxt.textColor = Color.white()
  subTxt.textOpacity = 0.8
  subTxt.font = Font.systemFont(18)
  return w
}
