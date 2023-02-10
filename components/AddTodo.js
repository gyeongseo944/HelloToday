import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useReducer } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { addTodo } from "@/lib/helper";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const Form = styled.form`
  display: grid;
  width: 100%;
  height: 200px;
  margin-top: 20px;
  grid-template-columns: repeat(2, minmax(100px, 400px));
  gap: 10px;
`;
const Item = styled.div`
  height: 70px;
  &:first-child {
    grid-row: 1 / span 3;
    height: 200px;
  }
  &:nth-child(2) {
    display: flex;
    height: 50px;
    justify-content: space-between;
  }
  &:nth-child(3) {
    height: 50px;
    position: relative;
    .calendarIcon {
      position: absolute;
      z-index: 1;
      width: 30px;
      height: 30px;
      top: 10px;
      left: 10px;
    }
  }
`;
const Text = styled.input`
  width: 100%;
  height: 100%;
  display: block;
  padding: 1rem;
  border: 2px solid black;
  border-radius: 10px;
`;
const Radio = styled.input`
  display: none;
`;
const RadioLabel = styled.label`
  display: block;
  padding: 0 1rem;
  text-align: center;
  line-height: 44px;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
  input:checked + && {
    background: black;
    color: white;
  }
`;
const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 50px;
  font-weight: 400;
  border: 2px solid black;
  border-radius: 10px;
  padding-left: 50px;
  font-size: 24px;
`;
const AddBnt = styled.button`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  border-radius: 10px;
  font-weight: bolder;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  background-color: white;
  transition: 0.5s;
  :hover {
    background-color: black;
    color: white;
  }
`;

export default function AddTodo({ addList }) {
  const [todoDate, setTodoDate] = useState(new Date());
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.todoDate = todoDate.toISOString().split("T")[0];
    if (!formData.todoTitle || !formData.category) {
      alert("작성 안 한 항목이 있어요 :(");
    } else {
      addTodo(formData).then((res) => addList(res.result));
      setTodoDate(new Date());
      e.target.reset();
    }
  };
  return (
    <>
      <h1>Add TO DO</h1>
      <Form onSubmit={handleSubmit}>
        <Item>
          <Text type="text" placeholder="Write what you have to do" name="todoTitle" onChange={setFormData} />
        </Item>
        <Item>
          <Radio type="radio" id="personal" name="category" value="PERSONAL" onChange={setFormData} />
          <RadioLabel htmlFor="personal">Personal</RadioLabel>
          <Radio type="radio" id="shopping" name="category" value="SHOPPING" onChange={setFormData} />
          <RadioLabel htmlFor="shopping">Shopping</RadioLabel>
          <Radio type="radio" id="work" name="category" value="WORK" onChange={setFormData} />
          <RadioLabel htmlFor="work">Work</RadioLabel>
          <Radio type="radio" id="health" name="category" value="HEALTH" onChange={setFormData} />
          <RadioLabel htmlFor="health">Health</RadioLabel>
        </Item>
        <Item>
          <BsCalendar3 className="calendarIcon" />
          <StyledDatePicker
            dateFormat="yyyy.MM.dd"
            selected={todoDate}
            onChange={(date) => {
              setTodoDate(date);
            }}
          />
        </Item>
        <Item>
          <AddBnt>Add</AddBnt>
        </Item>
      </Form>
    </>
  );
}
