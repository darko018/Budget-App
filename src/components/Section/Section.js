import React from "react";
import "./Section.css";
import { useState } from "react";

const Section = ({ valueToUpdate }) => {
  return (
    <div className="section_container">
      <div className="section_income">
        <h3 className="section_income_h3">INCOME</h3>
        <ul className="section_income_ul"></ul>
      </div>

      <div className="section_expense">
        <h3 className="section_expenses_h3">EXPENSES</h3>
        <ul className="section_expenses_ul">
          {valueToUpdate &&
            valueToUpdate.map((value) => {
              return React.createElement`<li>${value}</li>`;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Section;
