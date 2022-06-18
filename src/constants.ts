import { IFlatInfoInputData, IFlatPrimaryInfo, IFlatSecondaryInfo } from './types/house_hunting.type';

export const flatPrimaryInfoInitialState: IFlatPrimaryInfo = {
  hasTv: null,
  hasWashingMachine: null,
  hasFridge: null,
  hasPipedGasSupply: null,
  hasRO: null,
  hasGasStoveOrInduction: null,
  hasBedWithMattress: null,
  hasSofaSet: null,
  hasAC: null,
  hasStudyTable: null,
  hasGyesierInstalled: null,

  //Common
  hasFullEntryExit: null,
  allowFriends: null,
  hasCarParking: null,
  hasCupboard: null,
  hasFullWaterSupply: null,
};

export const flatSecondaryInfoInitialState: IFlatSecondaryInfo = {
  distanceFromOffice: null,
  finalMontlhyRent: null,
  finalDepostiAmount: null,
  finalBrokerCharges: null,
  propertyNameOrLink: null,
  location: null,
  brokerInfo: null,
};

export const commonAmmenetiesForFurnishedAndSemiFurnished = [
  {
    text: 'Has 24x7 Water Supply',
    key: 'hasFullEntryExit',
  },
  {
    text: 'Allows friends and other guests any time',
    key: 'allowFriends',
  },
  {
    text: 'Has Car Parking',
    key: 'hasCarParking',
  },
  {
    text: 'Has Cupboard',
    key: 'hasCupboard',
  },
  {
    text: 'Has 24x7 Water Supply',
    key: 'hasFullWaterSupply',
  },
];

export const flatPrimaryInfoInputDataIfFurnished: Array<IFlatInfoInputData> = [
  {
    text: 'Has TV',
    key: 'hasTv',
  },
  {
    text: 'Has Washing Machine',
    key: 'hasWashingMachine',
  },
  {
    text: 'Has Fridge',
    key: 'hasFridge',
  },
  {
    text: 'Has Gas Piped Supply',
    key: 'hasPipedGasSupply',
  },
  {
    text: 'Has RO Installed',
    key: 'hasRO',
  },
  {
    text: 'Has gas Stove / Induction',
    key: 'hasGasStoveOrInduction',
  },
  {
    text: 'Has Bed With Mattress',
    key: 'hasBedWithMattress',
  },
  {
    text: 'Has Sofa Set',
    key: 'hasSofaSet',
  },
  {
    text: 'Has AC',
    key: 'hasAC',
  },
  {
    text: 'Has Study Table',
    key: 'hasStudyTable',
  },

  {
    text: 'Has Gyesier Installed',
    key: 'hasGyesierInstalled',
  },
  ...commonAmmenetiesForFurnishedAndSemiFurnished,
];

export const flatSecondaryInfoInputData: Array<IFlatInfoInputData> = [
  {
    text: 'Distance From Office',
    key: 'distanceFromOffice',
  },
  {
    text: 'Final Monthly Rent',
    key: 'finalMontlhyRent',
  },
  {
    text: 'Final Deposit Amount',
    key: 'finalDepostiAmount',
  },
  {
    text: 'Final Broker Charges',
    key: 'finalBrokerCharges',
  },
  {
    text: 'Property Name / Link',
    key: 'propertyNameOrLink',
  },
  {
    text: 'Location',
    key: 'location',
  },
  {
    text: 'Broker Info',
    key: 'brokerInfo',
  },
];

export const mandatoryFlatInfo = ['hasFullEntryExit', 'allowFriends', 'isFullyFurnished', 'finalMonthlyRent', 'finalDepositAmount', 'distanceFromOffice', 'hasCupboard'];

export enum FlatInfoTab {
  primary = 'PRIMARY',
  secondary = 'SECONDARY',
}

export enum Furnishing {
  semiFurnished = 'SEMI_FURNISHED',
  fullFurnished = 'FULL_FURNISHED',
}

export const objectWithTwoBreakStringKeys = {
  '*********': '*********',
  '*****************': '*****************',
};
