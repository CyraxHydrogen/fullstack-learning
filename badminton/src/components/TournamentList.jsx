import React from 'react';
function TournamentList() {
  const tournaments = [
    {
      name: 'Vietnamese Tournament',
      date: '2024-09-15',
      location: 'Yennora Badminton Worx',
    },
    { name: 'NSW open', date: '2024-09-22', location: 'Alpha Auburn' },
    {
      name: 'Spring Tournament',
      date: '2024-10-01',
      locaiton: 'NBC Granville',
    },
  ];
  return (
    <div className="tournament">
      <div>Upcoming Tournament</div>
      <div className="tournament-list">
        {tournaments.map((tournament, index) => (
          <div key={index} className="tournament-item">
            <div>{tournament.name}</div>
            <div>Date: {tournament.date}</div>
            <div>Location: {tournament.location}</div>
            <button>Register</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TournamentList;
