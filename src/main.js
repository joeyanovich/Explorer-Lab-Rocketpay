import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#2D57F2", "#F3E989"],
    mastercard: ["#A5914B", "#D4424B"],
    dinersclub: ["#436D99", "#2D57F2"],
    hipercard: ["#816871", "#8E1C1B"],
    elo: ["#596294", "#DFA026"],
    americanexpress: ["#436D99", "#2D57F2"],
    default: ["black", "gray"],
  }

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardType = setCardType
