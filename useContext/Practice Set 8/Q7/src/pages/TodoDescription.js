import { useParams } from "react-router-dom";
export const TodoDescription = ({ todoData }) => {
  const { todoID } = useParams();
  const findTodoItem = todoData.find((item) => item.id === parseInt(todoID));
  console.log(findTodoItem);
  return (
    <>
      <h1>Todo Description</h1>
      <h3>Title: {findTodoItem.title}</h3>
      <p>
        <b>Description: </b>
        {findTodoItem.description}
      </p>
      <p>
        <b>Status: </b>
        {findTodoItem.isCompleted ? "Done" : "Not Done"}
      </p>
      <hr />
    </>
  );
};
