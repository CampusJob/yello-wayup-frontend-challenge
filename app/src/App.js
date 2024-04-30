import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchJobs } from './services/jobService';

function App() {
  const [jobs, setJobs] = useState([]);
  const [view, setView] = useState('grid'); 

  useEffect(() => {
    const loadData = async () => {
      const jobsData = await fetchJobs();
      setJobs(jobsData);
    };

    loadData();
  }, []);

  const toggleView = (newView) => {
    setView(newView);
  };

  return (
    <div className={`App ${view}-view`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="view-toggle">
          <button onClick={() => toggleView('list')}>List View</button>
          <button onClick={() => toggleView('grid')}>Grid View</button>
        </div>
        <p>
          Here are the available jobs:
        </p>
        {jobs.length > 0 ? (
          <ul>
            {jobs.map(job => (
              <li key={job.id} className="job-item">
                <div className="job-id">ID: {job.id}</div>
                <div className="job-title">{job.title}</div>
                <div className="job-company">{job.company}</div>
                <div className="job-description">{job.description}</div>
                <div className="job-tags">Tags: {job.tags.join(', ')}</div>
                <div className="job-location">{job.location}</div>
                <button onClick={() => console.log(`Saving ${job.title}`)}>Save</button>
                <button onClick={() => console.log(`Applying to ${job.title}`)}>Apply</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading jobs...</p>
        )}
      </header>
    </div>
  );
}

export default App;
