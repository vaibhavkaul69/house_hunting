import React from 'react';
import { flatPrimaryInfoInputDataIfFurnished } from '../../constants';
import { IFlatInfoInputData, IFlatPrimaryInfo, IPrimaryFlatIntoTabProp } from '../../types/house_hunting.type';
import '../../index.css';

const PrimaryFlatInfoTab: React.FC<IPrimaryFlatIntoTabProp> = React.memo(({ flatPrimaryInfo, setFlatPrimaryInfo }) => {
  return (
    <section className="">
      {flatPrimaryInfoInputDataIfFurnished.map((flat: IFlatInfoInputData, index: number) => {
        return (
          <div key={flat.key} className="flat_hunting_form__body_content">
            <h3 className="flat_hunting_form__label_text d-flex-row-just-start-align-start">
              <strong>{index + 1}.&nbsp;</strong>
              {flat.text}
            </h3>
            <div className="d-flex-row-center w-100">
              <button
                onClick={() => setFlatPrimaryInfo((flatInfo: IFlatPrimaryInfo) => ({ ...flatInfo, [flat.key]: true }))}
                className={`flat_hunting_form__action_button d-flex-row-center 
                    ${flatPrimaryInfo[flat.key] === true && 'active_state_btn_bg_color'}
                `}
              >
                Yes
              </button>
              <button
                onClick={() => setFlatPrimaryInfo((flatInfo: IFlatPrimaryInfo) => ({ ...flatInfo, [flat.key]: false }))}
                className={`flat_hunting_form__action_button d-flex-row-center 
                    ${flatPrimaryInfo[flat.key] === false && 'active_state_btn_bg_color'}
                `}
              >
                No
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
});

export default PrimaryFlatInfoTab;
