import styled from "styled-components";
import { FaTrashAlt, FaCheck } from "react-icons/fa";
import { updateTodo } from "@/lib/helper";
import { useEffect, useState } from "react";

const TodoBorder = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  border: 2px solid black;
  position: relative;
  padding: 10px 15px;
  margin-bottom: 10px;
  .todoComplete {
    text-decoration: line-through;
    color: gray;
  }
`;
const BntContainer = styled.div`
  width: 80px;
  height: 34px;
  position: absolute;
  bottom: 14px;
  right: 14px;
  .deleteIcon {
    width: 34px;
    height: 34px;
    cursor: pointer;
    transition: 0.1s;
    :hover {
      color: red;
    }
  }
  .checkIcon {
    width: 34px;
    height: 34px;
    padding: 2px;
    margin-right: 10px;
    border: 2px solid black;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.1s;
    :hover {
      color: white;
      background-color: green;
      border: 2px solid green;
    }
  }
  .complete {
    color: white;
    background-color: green;
    border: 2px solid green;
  }
`;
const CategoryIcon = styled.div`
  width: 80px;
  height: 24px;
  background-color: black;
  color: white;
  border-radius: 5px;
  position: absolute;
  bottom: 18px;
  left: 16px;
  font-weight: bolder;
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  &.date {
    left: 105px;
  }
`;

const Todo = ({ contents, category, complete, date, pageId, deleteList }) => {
  const [completeTodo, setCompleteTodo] = useState(complete);
  const checkUpdate = () => {
    const option = { reqType: "check", now: completeTodo, id: pageId };
    updateTodo(option);
    setCompleteTodo(!completeTodo);
  };
  const deleteTodo = () => {
    const option = { reqType: "delete", now: completeTodo, id: pageId };
    updateTodo(option);
    deleteList(pageId);
  };

  return (
    <TodoBorder>
      <BntContainer>
        <FaCheck className={completeTodo ? "checkIcon complete" : "checkIcon"} onClick={() => checkUpdate()} />
        <FaTrashAlt className="deleteIcon" onClick={() => deleteTodo()} />
      </BntContainer>
      <h1 className={completeTodo ? "todoComplete" : ""}>{contents}</h1>
      <CategoryIcon>{category}</CategoryIcon>
      <CategoryIcon className="date">{date}</CategoryIcon>
    </TodoBorder>
  );
};

export default Todo;
