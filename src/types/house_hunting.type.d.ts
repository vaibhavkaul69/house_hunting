import { Dispatch, SetStateAction } from 'react';
import { Furnishing } from '../constants';

interface IFlatPrimaryInfo {
  hasFullEntryExit: null | boolean;
  allowFriends: null | boolean;
  isFullyFurnished: null | boolean;
  isElectricityBackupAvailable: null | boolean;
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
  extraComments: null | string;
}

interface IFlatInfoInputData {
  text: string;
  key: string;
  metadata?: GenericObject;
}

interface IPrimaryFlatIntoTabProp {
  flatPrimaryInfo: IFlatPrimaryInfo;
  setFlatPrimaryInfo: Dispatch<SetStateAction<IFlatPrimaryInfo>>;
  typeOfFurnishing: Furnishing | null;
  setTypeOfFurnishing: Dispatch<SetStateAction<Furnishing | null>>;
}

interface ISecondaryFlatIntoTabProp {
  flatSecondaryInfo: IFlatSecondaryInfo;
  setFlatSecondaryInfo: Dispatch<SetStateAction<IFlatSecondaryInfo>>;
}

interface GenericObject {
  [key: string]: any;
  hasOwnProperty: any;
}

interface IPrimaryFlatOptionsOptionProps {
  options: Array<IFlatInfoInputData>;
  setFlatPrimaryInfo: Dispatch<SetStateAction<IFlatPrimaryInfo>>;
  flatPrimaryInfo: IFlatPrimaryInfo;
}

export type IFlatFormData = IFlatPrimaryInfo & IFlatSecondaryInfo;

export type FunctionWithSomeArgsReturnsUndefined = (args: any) => void;
