import { Modal, Input, Select } from 'antd';
import { useState } from 'react';

type CategoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, color: string) => void;
};

function CategoryModal({ isOpen, onClose, onSave }: CategoryModalProps) {
  const [categoryName, setCategoryName] = useState('');
  const [categoryColor, setCategoryColor] = useState('');

  const handleSave = () => {
    if (!categoryName) return;
    onSave(categoryName, categoryColor || '#000000');
    setCategoryName('');
    setCategoryColor('');
    onClose();
  };

  return (
    <Modal
      title="Add New Category"
      open={isOpen}
      onCancel={onClose}
      onOk={handleSave}
      okText="Save"
      cancelText="Cancel"
    >
      <Input
        placeholder="Enter category name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Select
        placeholder="Select color"
        value={categoryColor}
        onChange={(value) => setCategoryColor(value)}
        style={{ width: '100%' }}
      >
        <Select.Option value="#FF5733">🔴 Red</Select.Option>
        <Select.Option value="#33FF57">🟢 Green</Select.Option>
        <Select.Option value="#3357FF">🔵 Blue</Select.Option>
        <Select.Option value="#FFD700">🟡 Yellow</Select.Option>
        <Select.Option value="#FF33A6">🌸 Pink</Select.Option>
      </Select>
    </Modal>
  );
}

export default CategoryModal;
