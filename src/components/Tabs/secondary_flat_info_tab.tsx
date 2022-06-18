import React from 'react';
import { flatSecondaryInfoInputData } from '../../constants';
import { IFlatInfoInputData, IFlatPrimaryInfo, ISecondaryFlatIntoTabProp } from '../../types/house_hunting.type';
import '../../index.css';

const SecondaryFlatInfoTab: React.FC<ISecondaryFlatIntoTabProp> = ({ setFlatSecondaryInfo, flatSecondaryInfo }) => {
  return (
    <section className="">
      {flatSecondaryInfoInputData.map((flat: IFlatInfoInputData, index: number) => {
        return (
          <div key={flat.key} className="flat_hunting_form__body_content">
            <h3 className="flat_hunting_form__label_text d-flex-row-just-start-align-start">
              <strong>{index + 1}.&nbsp;</strong>
              {flat.text}
            </h3>
            <textarea
              rows={3}
              value={flatSecondaryInfo[flat.key]}
              onChange={(e) => setFlatSecondaryInfo((flatInfo: IFlatPrimaryInfo) => ({ ...flatSecondaryInfo, [flat.key]: e.target.value }))}
              className="w-100 flat_hunting_form__secondary_info_textarea"
            ></textarea>
          </div>
        );
      })}
    </section>
  );
};

export default SecondaryFlatInfoTab;
