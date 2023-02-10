import AddTodo from "./AddTodo";
import Todolist from "./Todolist";
import { getTodo } from "@/lib/helper";
import { useEffect, useState } from "react";

const HelloToday = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    if (listData.length === 0) {
      getTodo().then((res) => {
        console.log(res.result.results);
        setListData(res.result.results);
      });
    }
  }, []);
  const addList = (el) => {
    setListData([el, ...listData]);
  };
  const deleteList = (pageId) => {
    setListData(listData.filter((el) => el.id !== pageId));
  };

  return (
    <div className="container">
      <AddTodo addList={addList} />
      <Todolist listData={listData} deleteList={deleteList} />
    </div>
  );
};

export default HelloToday;
