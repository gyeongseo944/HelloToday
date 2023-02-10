import styled from "styled-components";
import { FaBorderAll, FaUserLock, FaShoppingCart, FaBriefcase, FaHeartbeat } from "react-icons/fa";
import { useState } from "react";

const CategoryContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const CategoryItem = styled.div`
  height: 100px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  padding: 0 2rem;
  font-weight: bolder;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .categoryIcon {
    font-size: 28px;
  }
  span {
    margin-top: 5px;
  }
  &.selected {
    background-color: black;
    color: white;
  }
`;
const Category = ({ selected, setSelected }) => {
  const [sel, setSel] = useState(selected);
  const changeCategory = (key) => {
    setSelected(key);
    setSel(key);
  };
  return (
    <>
      <CategoryContainer>
        <CategoryItem className={sel === "ALL" ? "selected" : ""} onClick={() => changeCategory("ALL")}>
          <FaBorderAll className="categoryIcon" />
          <span>ALL</span>
        </CategoryItem>
        <CategoryItem className={sel === "PERSONAL" ? "selected" : ""} onClick={() => changeCategory("PERSONAL")}>
          <FaUserLock className="categoryIcon" />
          <span>PERSONAL</span>
        </CategoryItem>
        <CategoryItem className={sel === "SHOPPING" ? "selected" : ""} onClick={() => changeCategory("SHOPPING")}>
          <FaShoppingCart className="categoryIcon" />
          <span>SHOPPING</span>
        </CategoryItem>
        <CategoryItem className={sel === "WORK" ? "selected" : ""} onClick={() => changeCategory("WORK")}>
          <FaBriefcase className="categoryIcon" />
          <span>WORK</span>
        </CategoryItem>
        <CategoryItem className={sel === "HEALTH" ? "selected" : ""} onClick={() => changeCategory("HEALTH")}>
          <FaHeartbeat className="categoryIcon" />
          <span>HEALTH</span>
        </CategoryItem>
      </CategoryContainer>
    </>
  );
};

export default Category;
