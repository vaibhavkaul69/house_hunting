export const getApiCallHeader = () => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  return myHeaders;
};

export const isUndefinedOrNull = <T>(variable: T | null | undefined): variable is null | undefined => {
  return typeof variable === 'undefined' || variable === null;
};
