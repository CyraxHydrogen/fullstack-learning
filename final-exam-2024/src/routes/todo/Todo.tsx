import TodoList from '../components/todo-list/index.';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Empty, Input, List } from 'antd';
import './Todo.css';
import { useState } from 'react';
import CategoryModal from '../components/category';

export function Todo() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const addCategory = (name: any, color: any) => {
    const newCategory = {
      id: tasks.length + 1,
      name: name,
      color: color,
      todos: [],
    };

    const newTasks = tasks.slice();
    newTasks.push(newCategory);
    setTasks(newTasks);
  };
  const deleteCategory = (id: number) => {
    const updatedTasks = tasks.filter((category) => category.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <div className="home-container">
      <div className="sidebar">
        <Input placeholder="Search for tags..." />
        <List
          className="tag-list"
          bordered
          dataSource={tasks}
          renderItem={(category) => (
            <List.Item
              actions={[
                <Button
                  type="text"
                  icon={<DeleteOutlined style={{ color: 'red' }} />}
                  onClick={() => deleteCategory(category.id)}
                />,
              ]}
            >
              <span>{category.name}</span>
            </List.Item>
          )}
        />
        <Button type="link" icon={<PlusOutlined />} onClick={showModal}>
          Add a new tag
        </Button>
      </div>

      <div className="todo-list-container">
        <Input
          placeholder="Search for todo's..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        {tasks.length > 0 ? (
          <TodoList tasks={tasks} setTasks={setTasks} search={search} />
        ) : (
          <Empty
            description="It seems that you don't have any todo"
            className="empty-state"
          />
        )}
      </div>
      <CategoryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={addCategory}
      />
    </div>
  );
}
