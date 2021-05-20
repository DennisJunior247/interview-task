import React from "react";
import { HeaderWrapper } from "./styles";
import { DropdownModal } from "../DropdownMenu/index";
import SearchBox from "../SearchBox/index";
import { Svg } from "../../assets/svg/index";

const Header = ({ data, onClick, }) => {

  const dropDown = [
    { list: "Default" },
    { list: "Education" },
    { list: "E-commerce" },
    { list: "Health" },
  ];
  const Order = [
    { list: "Default" },
    { list: "Ascending" },
    { list: "Descending" },
  ];
  const Date = [
    { list: "Default" },
    { list: "Ascending" },
    { list: "Descending" },
  ];

  return (
    <HeaderWrapper>
      <div className="filter-box">
        <div className="search-container">
          <SearchBox onchange={onClick} />
        </div>
        <div className="dropDown-container">
          <DropdownModal
            initial="Default"
            dropBk="#fff"
            dropHovBk="#fafafa"
            className="dropdown"
            dropDownData={dropDown}
            dropCol="#4D4D4C"
            selectedWeight="normal"
            selectedColor="#3F3F3F"
            dropDownName={"category"}
            left
            click={(selected) => {
              console.log("selected");
            }}
          />
          <DropdownModal
            initial="Default"
            dropBk="#fff"
            dropHovBk="#fafafa"
            className="dropdown"
            dropDownData={Order}
            dropCol="#4D4D4C"
            selectedWeight="normal"
            selectedColor="#3F3F3F"
            dropDownName={"order"}
            left
            click={(selected) => {
              console.log("selected");
            }}
          />
          <DropdownModal
            initial="Default"
            dropBk="#fff"
            dropHovBk="#fafafa"
            className="dropdown"
            dropDownData={Date}
            dropCol="#4D4D4C"
            selectedWeight="normal"
            selectedColor="#3F3F3F"
            dropDownName={"date"}
            left
            click={(selected) => {
              console.log("selected");
            }}
          />
        </div>
      </div>
      <div className="alert">
        <div>
          <div>
            <Svg />
          </div>
          <p>
            Tada! Get started with a free template. Can’t find what you are
            looking for? Search from the 1000+ available templates
          </p>
        </div>
      </div>
      <div className="sub-header">
        <h3>All Templates</h3>
        <h3>{`${data.length} ${"templates"}`}</h3>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
