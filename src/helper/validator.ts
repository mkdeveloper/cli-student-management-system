export function validatorString(param: string): boolean | string {
  if (param !== "") {
    return true;
  } else {
    return "Worng Entry";
  }
}

export function validatorNum(param: number): boolean | string {
  if (!isNaN(param)) {
    return true;
  } else {
    return "Worng Entry";
  }
}
