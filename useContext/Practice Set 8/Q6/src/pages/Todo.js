export const Todo = ({ todoData }) => {
  console.log(todoData);
  return (
    <div>
      <h1>This is the Todo Home Page</h1>
      {todoData.map(({ id, title, description, isCompleted }) => (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
