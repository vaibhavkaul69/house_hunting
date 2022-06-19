import { FunctionWithSomeArgsReturnsUndefined, GenericObject } from '../types/house_hunting.type';
import { getApiCallHeader, isUndefinedOrNull } from '../utils';

const tabId = process.env.REACT_APP_TAB_ID;
const authIdForSheet = process.env.REACT_APP_SHEET_AUTH_ID;
const baseUrl = process.env.REACT_APP_SPREADSHEET_URL;

const URL = `${baseUrl}${authIdForSheet}?tabId=${tabId}`;

export const postFlatData = async (formData: GenericObject, functionsToRunAfterAPICallResponse: FunctionWithSomeArgsReturnsUndefined) => {
  try {
    var requestOptions: RequestInit = {
      method: 'post',
      headers: getApiCallHeader(),
      redirect: 'follow',
      body: JSON.stringify(formData),
    };

    const response = await fetch(URL, requestOptions);
    const jsonResponse = await response.json();
    if (!isUndefinedOrNull(jsonResponse.message)) {
      !isUndefinedOrNull(functionsToRunAfterAPICallResponse) && functionsToRunAfterAPICallResponse(false);
    }
  } catch (err) {
    !isUndefinedOrNull(functionsToRunAfterAPICallResponse) && functionsToRunAfterAPICallResponse(true);
  }
};

export const getFlatData = async (functionsToRunIfApiSucceeds: FunctionWithSomeArgsReturnsUndefined) => {
  const response = await fetch(URL);
  const jsonResponse = await response.json();
  !isUndefinedOrNull(functionsToRunIfApiSucceeds) && functionsToRunIfApiSucceeds(jsonResponse);
};
