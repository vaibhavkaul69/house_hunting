import { FunctionWithNoArgsReturnsUndefined, FunctionWithSomeArgsReturnsUndefined, GenericObject } from '../types/house_hunting.type';
import { getApiCallHeader, isUndefinedOrNull } from '../utils';

const sheetId = 'Hunting Doc';
const URL = `https://v1.nocodeapi.com/vaibhav/google_sheets/PJlhnrdMOwrRROrp?tabId=${sheetId}`;

export const postFlatData = async (formData: GenericObject, functionsToRunIfApiSucceeds: FunctionWithNoArgsReturnsUndefined) => {
  var requestOptions: RequestInit = {
    method: 'post',
    headers: getApiCallHeader(),
    redirect: 'follow',
    body: JSON.stringify(formData),
  };

  const response = await fetch(URL, requestOptions);
  const jsonResponse = await response.json();
  if (!isUndefinedOrNull(jsonResponse.message)) {
    !isUndefinedOrNull(functionsToRunIfApiSucceeds) && functionsToRunIfApiSucceeds();
  }
};

export const getFlatData = async (functionsToRunIfApiSucceeds: FunctionWithSomeArgsReturnsUndefined) => {
  const response = await fetch(URL);
  const jsonResponse = await response.json();
  !isUndefinedOrNull(functionsToRunIfApiSucceeds) && functionsToRunIfApiSucceeds(jsonResponse);
};
