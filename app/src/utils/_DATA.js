let users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL: "six.png",
    decks: [],
    answeredDecks: {}
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL: "three.png",
    decks: [],
    answeredDecks: {}
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatarURL: "two.png",
    decks: [],
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

function formatDeckForAdd({ title, user }) {
  return {
    id: generateUID(),
    title,
    cards: [],
    createdBy: user
  }
}

export function _addDeck({ title, user }) {
  return new Promise((resolve, reject) => {
    const deck = formatDeckForAdd({ title, user })
    decks = {
      ...decks,
      [deck.id]: deck
    }

    users = {
      ...users,
      [user]: {
        ...users[user],
        decks: users[user].decks.concat(deck.id)
      }
    }

    setTimeout(() => {
      resolve(deck)
    }, 2000)
  })
}

export function _getUsers() {
  return new Promise((resolve, reject) => {
    resolve({ ...users })
  })
}

export function _getDecks() {
  return new Promise((resolve, reject) => {
    resolve({ ...decks })
  })
}
