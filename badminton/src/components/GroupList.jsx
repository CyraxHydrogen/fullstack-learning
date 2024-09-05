import React from 'react';
function GroupList() {
  const groups = [
    { name: 'TDT', members: 70 },
    { name: 'The Village', members: 50 },
  ];
  return (
    <div className="group-list">
      <div>Groups</div>
      <div className="list">
        {groups.map((group, index) => (
          <div key={index} className="group-item">
            <div>{group.name}</div>
            <div>Members:{group.members}</div>
            <button>View Group</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupList;
