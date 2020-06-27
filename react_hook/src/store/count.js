export function count(state, action) {
  switch (action.type) {
    case "up":
      state += 1
      break
    case "down":
      state -= 1
      break
    default:
      break
  }
  return state
}
