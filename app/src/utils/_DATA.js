let users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL: "six.png",
    decks: {},
    answeredDecks: {}
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL: "three.png",
    decks: {},
    answeredDecks: {}
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatarURL: "two.png",
    decks: {},
    answeredDecks: {}
  }
}

let decks = {}

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  )
}

export function _getUsers() {
  return new Promise((resolve, reject) => {
    resolve({ ...users })
  })
}
