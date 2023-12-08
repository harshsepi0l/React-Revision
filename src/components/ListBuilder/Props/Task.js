export const Task = (props) => {
  return (
    <div style={{ backgroundColor: props.completed ? "green" : "white" }}>
      <h1> {props.name} </h1>
      <button onClick={() => props.completedTask(props.id)}>Completed</button>
      <button onClick={() => props.deleteTask(props.id)}> X </button>
    </div>
  );
};
