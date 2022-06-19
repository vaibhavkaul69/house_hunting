import { IFlatInfoInputData, IFlatPrimaryInfo, IFlatSecondaryInfo } from './types/house_hunting.type';

export const flatPrimaryInfoInitialState: IFlatPrimaryInfo = {
  hasTv: null,
  isFullyFurnished: null,
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
  isElectricityBackupAvailable: null,
};

export const flatSecondaryInfoInitialState: IFlatSecondaryInfo = {
  propertyNameOrLink: null,
  location: null,
  distanceFromOffice: null,
  finalMontlhyRent: null,
  finalDepostiAmount: null,
  finalBrokerCharges: null,
  brokerInfo: null,
  extraComments: null,
};

export const flatPrimaryInfoInputDataIfSemiFurnished = [
  {
    text: 'Is 24x7 Entry Exit allowed',
    key: 'hasFullEntryExit',
  },
  {
    text: 'Is Electricity backup Available',
    key: 'isElectricityBackupAvailable',
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
  {
    text: 'Allows friends and other guests any time',
    key: 'allowFriends',
  },
];

export const flatPrimaryInfoInputDataIfFullyFurnished: Array<IFlatInfoInputData> = [
  {
    text: 'Has TV',
    key: 'hasTv',
  },
  {
    text: 'Has Fridge',
    key: 'hasFridge',
  },
  {
    text: 'Has RO Installed',
    key: 'hasRO',
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
  {
    text: 'Has Washing Machine',
    key: 'hasWashingMachine',
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
    text: 'Has Gas Piped Supply',
    key: 'hasPipedGasSupply',
  },
  ...flatPrimaryInfoInputDataIfSemiFurnished,
];

export const flatSecondaryInfoInputData: Array<IFlatInfoInputData> = [
  {
    text: 'Property Name / Link',
    key: 'propertyNameOrLink',
    metadata: {
      cols: 1,
    },
  },
  {
    text: 'Location',
    key: 'location',
    metadata: {
      cols: 1,
    },
  },
  {
    text: 'Distance From Office',
    key: 'distanceFromOffice',
    metadata: {
      cols: 1,
    },
  },
  {
    text: 'Final Monthly Rent',
    key: 'finalMontlhyRent',
    metadata: {
      cols: 1,
    },
  },
  {
    text: 'Final Deposit Amount',
    key: 'finalDepostiAmount',
    metadata: {
      cols: 1,
    },
  },
  {
    text: 'Final Broker Charges',
    key: 'finalBrokerCharges',
    metadata: {
      cols: 1,
    },
  },
  {
    text: 'Broker Info',
    key: 'brokerInfo',
    metadata: {
      cols: 3,
    },
  },
  {
    text: 'Extra Comments',
    key: 'extraComments',
    metadata: {
      cols: 3,
    },
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
  '********************************': '***************************',
  '******************************************': '**********************************',
};
