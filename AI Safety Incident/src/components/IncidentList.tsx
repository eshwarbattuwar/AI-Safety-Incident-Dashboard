import React from 'react';
import { Incident, FilterType, SortOrder } from '../types/incident';
import IncidentCard from './IncidentCard';

interface IncidentListProps {
  incidents: Incident[];
  filter: FilterType;
  sortOrder: SortOrder;
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents, filter, sortOrder }) => {
  // Apply filtering
  const filteredIncidents = incidents.filter(incident => 
    filter === 'All' || incident.severity === filter
  );

  // Apply sorting
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  if (sortedIncidents.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <p className="text-gray-600">No incidents match your current filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedIncidents.map(incident => (
        <IncidentCard key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;