import React from 'react';
import './App.css';

function App() {
  return (
    <div className="component-b">
      <h1>📊 Component B</h1>
      <p>This section displays recent analytics and activity summaries relevant to your application.</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>New Users</h3>
          <p>1,254</p>
        </div>
        <div className="stat-card">
          <h3>Active Sessions</h3>
          <p>342</p>
        </div>
        <div className="stat-card">
          <h3>Sales Today</h3>
          <p>$5,290</p>
        </div>
      </div>
    </div>

  );
}

export default App;
