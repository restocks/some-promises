export default async (array, func) => {
  let result = false
  for (const i of array) {
    let funcValue = null
    try {
      funcValue = await func(i)
    } catch (e) {
      console.error(e)
      break
    }
    if (result === true) {
      result = funcValue
      break
    }
  }
  return result
}
