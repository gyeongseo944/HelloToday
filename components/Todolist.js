import { useEffect, useState } from "react";
import Category from "./Category";
import Todo from "./Todo";

const Todolist = ({ listData, deleteList }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showList, setShowList] = useState(listData);

  const changeCategory = (category) => {
    return listData.filter((el) => el.properties.Category.multi_select[0].name === category);
  };
  useEffect(() => {
    if (selectedCategory !== "ALL") {
      setShowList(changeCategory(selectedCategory));
    } else {
      setShowList(listData);
    }
  }, [listData, selectedCategory]);

  return (
    <>
      <div>
        <h1 style={{ marginTop: "20px" }}>Check Your To Do List</h1>
        <Category selected={selectedCategory} setSelected={setSelectedCategory} />
        <div className="listContainer" style={{ marginTop: "26px" }}>
          {showList.map((el, id) => (
            <Todo
              key={el.id}
              contents={el.properties.Todo.title[0].plain_text}
              category={el.properties.Category.multi_select[0].name}
              complete={el.properties.Complete.checkbox}
              date={el.properties.Date.date.start}
              pageId={el.id}
              deleteList={deleteList}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todolist;
