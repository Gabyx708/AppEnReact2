import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {


  function taskTableRow(doneValue) {
    return tasks
    .filter(t=> t.done === doneValue)
    .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ));
  }

  return (
    <table className= "table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Cosas que hacer: </th>
        </tr>
      </thead>
      <tbody>{taskTableRow(showCompleted)}</tbody>
    </table>
  );
};
