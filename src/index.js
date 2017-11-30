export default async (array, func) => {
  let result = false;
  for (const item of array) {
    let funcValue = null;
    try {
      funcValue = await func(item);
    } catch (e) {
      console.error(e);
      break;
    }
    result = funcValue;
    if (result === true) {
      break;
    }
  }
  return result;
};
