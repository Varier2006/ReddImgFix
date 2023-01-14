const link = location.href
const neco = link.replace("preview","i")
let newlink = ""
let x = 0
while (neco[x] !== "?"){
    newlink= (newlink+neco[x])
    x++
}
location.replace(newlink)