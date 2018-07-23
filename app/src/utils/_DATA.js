let users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL: "six.png",
    flashCards: {},
    answeredFlashCards: {}
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL: "three.png",
    flashCards: {},
    answeredFlashCards: {}
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatarURL: "two.png",
    flashCards: {},
    answeredFlashCards: {}
  }
}

let flashCards = {}

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
    setTimeout(() => resolve({ ...users }), 1000)
  })
}
