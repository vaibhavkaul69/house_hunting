import React, { useEffect, useState } from 'react';
import { getFlatData, postFlatData } from '../../apis';
import { flatPrimaryInfoInitialState, flatSecondaryInfoInitialState, FlatInfoTab, objectWithTwoBreakStringKeys } from '../../constants';
import { IFlatPrimaryInfo, IFlatSecondaryInfo } from '../../types/house_hunting.type';
import Loader from '../loader';
import PrimaryFlatInfoTab from '../Tabs/primary_flat_info_tab';
import SecondaryFlatInfoTab from '../Tabs/secondary_flat_info_tab';

const HouseHuntingForm: React.FC = () => {
  const [flatPrimaryInfo, setFlatPrimaryInfo] = useState<IFlatPrimaryInfo>(flatPrimaryInfoInitialState);
  const [flatSecondaryInfo, setFlatSecondaryInfo] = useState<IFlatSecondaryInfo>(flatSecondaryInfoInitialState);
  const [currentTab, setCurrentTab] = useState<FlatInfoTab>(FlatInfoTab.primary);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const submitAnswers = () => {
    setShowLoader(true);
    const finalFormData = { ...flatSecondaryInfo, ...flatPrimaryInfo, ...objectWithTwoBreakStringKeys };
    const data = Object.entries(finalFormData);
    postFlatData(data, () => setShowLoader(false));
  };

  useEffect(() => {
    getFlatData((data) => {
      console.log(data);
    });
  }, []);

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
        {currentTab === FlatInfoTab.primary && <PrimaryFlatInfoTab flatPrimaryInfo={flatPrimaryInfo} setFlatPrimaryInfo={setFlatPrimaryInfo} />}
        {currentTab === FlatInfoTab.secondary && <SecondaryFlatInfoTab flatSecondaryInfo={flatSecondaryInfo} setFlatSecondaryInfo={setFlatSecondaryInfo} />}
        {showLoader && <Loader />}
      </div>
      <button onClick={submitAnswers} className="flat_hunting_form__submit_btn w-100">
        Submit
      </button>
    </div>
  );
};

export default HouseHuntingForm;
