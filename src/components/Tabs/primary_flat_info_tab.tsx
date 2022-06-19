import React from 'react';
import { flatPrimaryInfoInputDataIfFurnished, flatPrimaryInfoInputDataIfSemiFurnished, Furnishing } from '../../constants';
import { IPrimaryFlatIntoTabProp } from '../../types/house_hunting.type';
import '../../index.css';
import PrimaryFlatInfoOptions from './primary_flat_info_options';
import Arrow from '../../assets/icons/up-arrow.png';

const PrimaryFlatInfoTab: React.FC<IPrimaryFlatIntoTabProp> = React.memo(({ flatPrimaryInfo, setFlatPrimaryInfo, typeOfFurnishing, setTypeOfFurnishing }) => {
  return (
    <section className="">
      <div className="flat_hunting_form__select_furnishing w-100 d-flex-row-center">
        <button
          className={`flat_hunting_form__select_furnishing_action_btn ${typeOfFurnishing === Furnishing.semiFurnished ? 'furnishing_btns_active_state' : ''}`}
          onClick={() => setTypeOfFurnishing(Furnishing.semiFurnished)}
        >
          Semi Furnished
        </button>
        <button
          className={`flat_hunting_form__select_furnishing_action_btn ${typeOfFurnishing === Furnishing.fullFurnished ? 'furnishing_btns_active_state' : ''}`}
          onClick={() => setTypeOfFurnishing(Furnishing.fullFurnished)}
        >
          Fully Furnished
        </button>
      </div>
      {typeOfFurnishing === Furnishing.fullFurnished && (
        <div className="flat_hunting_form__grid_body">
          <PrimaryFlatInfoOptions options={flatPrimaryInfoInputDataIfFurnished} flatPrimaryInfo={flatPrimaryInfo} setFlatPrimaryInfo={setFlatPrimaryInfo} />
        </div>
      )}
      {typeOfFurnishing === Furnishing.semiFurnished && (
        <div className="flat_hunting_form__grid_body">
          <PrimaryFlatInfoOptions options={flatPrimaryInfoInputDataIfSemiFurnished} flatPrimaryInfo={flatPrimaryInfo} setFlatPrimaryInfo={setFlatPrimaryInfo} />
        </div>
      )}
      {typeOfFurnishing === null && (
        <div className="d-flex-col-just-center-align-center">
          <img src={Arrow} className="no_selected_furnishing_icon" alt="Arrow pointing above" />
          <h2 className="no_selected_furnishing_text">Select a furnishing type above..</h2>
        </div>
      )}
    </section>
  );
});

export default PrimaryFlatInfoTab;
