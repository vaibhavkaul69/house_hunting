interface IFlatPrimaryInfo {
  hasFullEntryExit: null | boolean;
  allowFriends: null | boolean;
  hasTv: null | boolean;
  hasWashingMachine: null | boolean;
  hasFridge: null | boolean;
  hasPipedGasSupply: null | boolean;
  hasRO: null | boolean;
  hasGasStoveOrInduction: null | boolean;
  hasSofaSet: null | boolean;
  hasAC: null | boolean;
  hasStudyTable: null | boolean;
  hasFullWaterSupply: null | boolean;
  hasGyesierInstalled: null | boolean;
  hasCupboard: null | boolean;
  hasBedWithMattress: null | boolean;
  hasCarParking: null | boolean;
}

interface IFlatSecondaryInfo {
  distanceFromOffice: null | string;
  finalMontlhyRent: null | string;
  finalDepostiAmount: null | string;
  finalBrokerCharges: null | string;
  location: null | string;
  brokerInfo: null | string;
  propertyNameOrLink: null | string;
}

interface IFlatInfoInputData {
  text: string;
  key: string;
}

interface IPrimaryFlatIntoTabProp {
  flatPrimaryInfo: IFlatPrimaryInfo;
  setFlatPrimaryInfo: Dispatch<SetStateAction<IFlatPrimaryInfo>>;
}

interface ISecondaryFlatIntoTabProp {
  flatSecondaryInfo: IFlatSecondaryInfo;
  setFlatSecondaryInfo: Dispatch<SetStateAction<IFlatPrimaryInfo>>;
}

export interface GenericObject {
  [key: string]: any;
  hasOwnProperty: any;
}

export type IFlatFormData = IFlatPrimaryInfo & IFlatSecondaryInfo;

export type FunctionWithNoArgsReturnsUndefined = () => void;

export type FunctionWithSomeArgsReturnsUndefined = (args: any) => void;
