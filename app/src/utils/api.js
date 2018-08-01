import { _getUsers, _getDecks, _addDeck, _addCardToDeck } from "./_DATA"

export function addDeck(deckInfo) {
  return new Promise((resolve, reject) => {
    try {
      const deck = _addDeck(deckInfo)
      resolve(deck)
    } catch (error) {
      reject(error)
    }
  })
}

export function addCardToDeck(cardInfo) {
  return new Promise((resolve, reject) => {
    try {
      const card = _addCardToDeck(cardInfo)
      resolve(card)
    } catch (error) {
      reject(error)
    }
  })
}

export function getInitialUsers() {
  return _getUsers()
}

export function getInitialDecks() {
  return _getDecks()
}

export function getImagePath(image) {
  switch (image) {
    case "one.png":
      return require("../assets/images/avatars/one.png")
    case "two.png":
      return require("../assets/images/avatars/two.png")
    case "three.png":
      return require("../assets/images/avatars/three.png")
    case "four.png":
      return require("../assets/images/avatars/four.png")
    case "five.png":
      return require("../assets/images/avatars/five.png")
    case "six.png":
      return require("../assets/images/avatars/six.png")
  }
}
