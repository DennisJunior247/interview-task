import React, { useState } from "react";
import { DropdownModalBox } from "./styles";
import { RiArrowDownSLine as UpArrow } from "react-icons/ri";
import { truncate } from "../../utils/utilFuc";

export const DropdownModal = ({
  dropDownData,
  dropBk,
  dropHovBk,
  dropCol,
  click,
  initial,
  left,
  right,
  canClick = true,
  selectedWeight,
  selectedColor,
  dropDownName,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(initial || "Select");

  const handleSelectOption = (value) => {
    setSelected(value);
    setOpenModal(!openModal);
    click(value);
  };

  return (
    <DropdownModalBox
      dropBk={dropBk}
      dropHovBk={dropHovBk}
      dropCol={dropCol}
      left={left}
      right={right}
      selectedWeight={selectedWeight}
      selectedColor={selectedColor}
      canClick={canClick}
      className="dropdownModalBox"
    >
      <span className="up">{dropDownName}</span>
      <div
        className="click"
        onClick={() => canClick && setOpenModal(!openModal)}
      >
        <span className="selectedText">
          {truncate(selected, 20) || "Select"}
        </span>
        <UpArrow />
      </div>
      {openModal && (
        <div
          className="overlay"
          onClick={() => canClick && setOpenModal(!openModal)}
        />
      )}
      {openModal && (
        <section>
          <ul>
            {dropDownData.map((item) => (
              <li
                onClick={() => canClick && handleSelectOption(`${item.list}`)}
                key={Math.random() * (100 - 10 + 1)}
              >
                <span className="modalText">{item.list}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </DropdownModalBox>
  );
};
