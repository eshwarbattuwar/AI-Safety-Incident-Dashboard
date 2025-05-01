import React, { useState } from 'react';
import { Incident, FilterType, SortOrder } from '../types/incident';
import { mockIncidents } from '../data/mockIncidents';
import FilterControls from './FilterControls';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import { ShieldAlert } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [filter, setFilter] = useState<FilterType>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const addIncident = (newIncident: Omit<Incident, 'id'>) => {
    const newId = Math.max(0, ...incidents.map(i => i.id)) + 1;
    const incidentWithId = { ...newIncident, id: newId };
    setIncidents([incidentWithId, ...incidents]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-full">
          <ShieldAlert className="h-6 w-6 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">AI Safety Incident Dashboard</h1>
      </div>
      
      <IncidentForm addIncident={addIncident} />
      
      <FilterControls
        currentFilter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      
      <IncidentList
        incidents={incidents}
        filter={filter}
        sortOrder={sortOrder}
      />
    </div>
  );
};

export default Dashboard;