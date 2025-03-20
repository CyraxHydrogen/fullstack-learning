import { Button, Checkbox, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import styles from './index.module.css';

type Todo = {
  id: number | string;
  text: string;
  completed: boolean;
};

type Category = {
  id: number | string;
  name: string;
  todos: Todo[];
};

type TodoListProps = {
  tasks: Category[];
  setTasks: (tasks: Category[]) => void;
  search: string;
};

function TodoList({ tasks, setTasks, search }: TodoListProps) {
  const updateTask = (
    categoryId: number | string,
    taskId: number | string,
    completed: boolean
  ) => {
    const updatedTasks = tasks.map((category) => {
      if (category.id === categoryId) {
        return {
          id: category.id,
          name: category.name,
          todos: category.todos.map((todo) =>
            todo.id === taskId
              ? { id: todo.id, text: todo.text, completed }
              : todo
          ),
        };
      }
      return category;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (categoryId: number | string, taskId: number | string) => {
    const updatedTasks = tasks.map((category) => {
      if (category.id === categoryId) {
        return {
          id: category.id,
          name: category.name,
          todos: category.todos.filter((todo) => todo.id !== taskId),
        };
      }
      return category;
    });

    setTasks(updatedTasks);
  };

  return (
    <List
      className={styles.todolist}
      dataSource={tasks}
      renderItem={(category) => (
        <List.Item className={styles.todocategory}>
          <b>{category.name}</b>
          <List
            dataSource={category.todos.filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )}
            renderItem={(todo) => (
              <List.Item className={styles.todoitem}>
                <Checkbox
                  checked={todo.completed}
                  onChange={(e) =>
                    updateTask(category.id, todo.id, e.target.checked)
                  }
                />
                <span className={todo.completed ? styles.completedtask : ''}>
                  {todo.text}
                </span>
                <Button
                  type="text"
                  icon={<DeleteOutlined style={{ color: 'red' }} />}
                  onClick={() => deleteTask(category.id, todo.id)}
                />
              </List.Item>
            )}
          />
        </List.Item>
      )}
    />
  );
}

export default TodoList;
