import React from 'react';
import HouseHuntingForm from './house_hunting_form';
import HouseHuntingLeads from './house_hunting_leads';
import '../../index.css';
import HouseHuntingIcon from '../../assets/icons/house_hunting_icon.png';

const HouseHuntingContainer: React.FC = () => {
  return (
    <section className="flat_hunting_container d-flex-col-just-start-align-center">
      <header className="d-flex-row-center flat_hunting_header">
        <img src={HouseHuntingIcon} alt="House hunting icon" className="house_hunting_header__icon" />
        <h1 className="house_hunting_header__heading">House Hunting</h1>
      </header>
      <HouseHuntingForm />
      <HouseHuntingLeads />
    </section>
  );
};

export default HouseHuntingContainer;
