const removeDuplication = (array: any[], key?: string | number) => {
  let result = [];

  if (key) {
    result = array.filter((item1, idx1) => {
      return (
        array.findIndex((item2) => {
          return item1[key] === item2[key];
        }) === idx1
      );
    });
  } else {
    result = Array.from(new Set(array));
  }

  return result;
};

export default removeDuplication;
