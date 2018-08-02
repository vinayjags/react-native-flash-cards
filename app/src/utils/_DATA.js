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

function formatCardForAdd({ question, answer, deckId }) {
  return {
    id: generateUID(),
    question,
    answer,
    deckId
  }
}

function formatScore(score) {
  return {
    score,
    quizTakenOn: Math.floor(new Date().getTime() / 1000)
  }
}

export function _saveScoreToUser(score) {
  return new Promise((resolve, reject) => {
    const scoreInfo = formatScore(score)
    setTimeout(() => {
      try {
        resolve(scoreInfo)
      } catch (error) {
        reject(error)
      }
    }, 2000)
  })
}

export function _addCardToDeck({ question, answer, deckId }) {
  return new Promise((resolve, reject) => {
    const card = formatCardForAdd({ question, answer, deckId })
    setTimeout(() => {
      try {
        resolve(card)
      } catch (error) {
        reject(error)
      }
    }, 2000)
  })
}

export function _addDeck({ title, user }) {
  return new Promise((resolve, reject) => {
    const deck = formatDeckForAdd({ title, user })
    setTimeout(() => {
      try {
        resolve(deck)
      } catch (error) {
        reject(error)
      }
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
