import React, { useEffect, useState } from 'react';
import { postFlatData } from '../../apis';
import { flatPrimaryInfoInitialState, flatSecondaryInfoInitialState, FlatInfoTab, objectWithTwoBreakStringKeys, Furnishing } from '../../constants';
import { IFlatPrimaryInfo, IFlatSecondaryInfo } from '../../types/house_hunting.type';
import { isUndefinedOrNull } from '../../utils';
import Loader from '../loader';
import PrimaryFlatInfoTab from '../Tabs/primary_flat_info_tab';
import SecondaryFlatInfoTab from '../Tabs/secondary_flat_info_tab';

const HouseHuntingForm: React.FC = () => {
  const [flatPrimaryInfo, setFlatPrimaryInfo] = useState<IFlatPrimaryInfo>(flatPrimaryInfoInitialState);
  const [flatSecondaryInfo, setFlatSecondaryInfo] = useState<IFlatSecondaryInfo>(flatSecondaryInfoInitialState);
  const [currentTab, setCurrentTab] = useState<FlatInfoTab>(FlatInfoTab.primary);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [typeOfFurnishing, setTypeOfFurnishing] = useState<Furnishing | null>(null);

  useEffect(() => {
    if (!isUndefinedOrNull(typeOfFurnishing)) {
      const isFullyFurnished = typeOfFurnishing === Furnishing.fullFurnished ? true : false;
      setFlatPrimaryInfo((flatPrimaryInfo) => ({ ...flatPrimaryInfo, isFullyFurnished: isFullyFurnished }));
    }
  }, [typeOfFurnishing]);

  const submitAnswers = () => {
    setShowLoader(true);
    const finalFormData = {
      ...flatSecondaryInfo,
      ...flatPrimaryInfo,
      ...objectWithTwoBreakStringKeys,
    };
    const actualDataToSendAs2DArray = Object.entries(finalFormData);

    postFlatData(actualDataToSendAs2DArray, runAfterAPICallResponse);
  };

  const runAfterAPICallResponse = (anyError: boolean) => {
    if (anyError === false) {
      setShowLoader(false);
      setFlatPrimaryInfo(flatPrimaryInfoInitialState);
      setFlatSecondaryInfo(flatSecondaryInfoInitialState);
      setCurrentTab(FlatInfoTab.primary);
      setTypeOfFurnishing(null);
    } else {
      setShowLoader(false);
    }
  };

  return (
    <div className="flat_hunting_form_container d-flex-column-center ">
      <div className="flat_hunting_form_body">
        <div className="w-100 d-flex-row-just-between-align-center">
          <h2 onClick={() => setCurrentTab(FlatInfoTab.primary)} className={`flat_hunting_form__tab_button ${currentTab === 'PRIMARY' ? 'active_tab_button' : ''}`}>
            Flat Primary Info
          </h2>
          <h2 onClick={() => setCurrentTab(FlatInfoTab.secondary)} className={`flat_hunting_form__tab_button ${currentTab === 'SECONDARY' ? 'active_tab_button' : ''}`}>
            Flat Secondary Info
          </h2>
        </div>
        {currentTab === FlatInfoTab.primary && (
          <PrimaryFlatInfoTab typeOfFurnishing={typeOfFurnishing} setTypeOfFurnishing={setTypeOfFurnishing} flatPrimaryInfo={flatPrimaryInfo} setFlatPrimaryInfo={setFlatPrimaryInfo} />
        )}
        {currentTab === FlatInfoTab.secondary && <SecondaryFlatInfoTab flatSecondaryInfo={flatSecondaryInfo} setFlatSecondaryInfo={setFlatSecondaryInfo} />}
        {showLoader && <Loader />}
      </div>

      {typeOfFurnishing !== null && (
        <button onClick={submitAnswers} className="flat_hunting_form__submit_btn w-100">
          Submit
        </button>
      )}
    </div>
  );
};

export default HouseHuntingForm;
