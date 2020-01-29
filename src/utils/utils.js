export const upperFirst = str => {
  const firtst = str.slice(0, 1);
  return firtst.toUpperCase() + str.slice(1);
};
export const checkSame = (tuple, scanLenght = 0) => {
  if (scanLenght && tuple.length) {
    const resultArr = tuple.map(ele => {
      let sliceArr = [];
      for (let i = 0; i <= ele.length - scanLenght; i++) {
        sliceArr.push(ele.slice(i, scanLenght + i));
      }
      return sliceArr;
    });

    let compareArr = [];

    for (let singleArr of resultArr) {
      for (let value of singleArr) {
        const isIncludeTarget = compareArr.indexOf(value) >= 0;
        if (isIncludeTarget) {
          return true;
        }
      }
      compareArr = [...compareArr, ...singleArr];
    }
    return false;
  } else {
    return false;
  }
};
