export default function Task({ taskList, setTaskList, task, setTask }) {

  function handleSubmit(e) {
    e.preventDefault();

    const date = new Date();

    
    if (task.id) {
      const updatedTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
          : todo
      );

      setTaskList(updatedTaskList);
      setTask({ id: "", name: "" }); 
      return;
    }

    
    const newTask = {
      id: date.getTime(),
      name: task.name,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    };

    setTaskList([...taskList, newTask]);
    setTask({ id: "", name: "" }); // clear input
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength={25}
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
}