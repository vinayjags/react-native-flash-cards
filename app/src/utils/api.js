import { _getUsers, _getDecks } from "./_DATA"

export function getInitialUsers() {
  return _getUsers()
}

export function getInitialDecks() {
  return _getDecks()
}
