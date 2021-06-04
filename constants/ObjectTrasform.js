const ObjectTransform = (data) => {
  let array = [];
  for (let game in data) {
    if (data[game] == true) {
      array.push(game);
    }
  }
  return array;
};
export default ObjectTransform;
