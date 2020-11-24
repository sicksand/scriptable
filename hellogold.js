// Hello Gold Widget by Shafiq Mustapa
// by @shafiqmustapa
// like what I do? buy me a coffee -> https://www.buymeacoffee.com/9itd16a

// HOW TO
// 1) Install Scriptable @ https://apps.apple.com/us/app/scriptable/id1405459188
// 2) Copy this entire script in to Scriptable (tip: you can send it to your iPhone via Whatsapp/Messenger/Telegram etc)

const endpoint = "https://api.hellogold.com/prod/api/v2/spot_price.json"
const req = new Request(endpoint)
const res = await req.loadJSON()

let spot = parseFloat(res.data.spot_price).toFixed(2)
let buy = parseFloat(res.data.buy).toFixed(2)
let sell = parseFloat(res.data.sell).toFixed(2)
let timestamp = new Date(res.data.timestamp)

let widget = createWidget("HelloGold", RM ${spot}, RM ${sell} Sell RM ${buy} Buy, ${timestamp.toDateString()}, "#F8E50A")
 Script.setWidget(widget)
 Script.complete()



function createWidget(pretitle, title, subtitle, subsubtitle, color) {
  let w = new ListWidget()
  w.backgroundColor = new Color(color)
  let preTxt = w.addText(pretitle)
  preTxt.textColor = Color.black()
  preTxt.textOpacity = 0.8
  preTxt.font = Font.systemFont(16)
  w.addSpacer(5)
  let titleTxt = w.addText(title)
  titleTxt.textColor = Color.gray()
  titleTxt.font = Font.systemFont(22)
  w.addSpacer(5)
  let subTxt = w.addText(subtitle)
  subTxt.textColor = Color.gray()
  subTxt.textOpacity = 0.8
  subTxt.font = Font.systemFont(16)
  let subsubTxt = w.addText(subsubtitle)
  subsubTxt.textColor = Color.gray()
  subsubTxt.textOpacity = 0.8
  subsubTxt.font = Font.systemFont(10)
  return w
}
