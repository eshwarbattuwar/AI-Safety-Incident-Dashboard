import React, { useState } from 'react';
import { Incident } from '../types/incident';
import SeverityBadge from './SeverityBadge';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 transition-all duration-200 hover:shadow-lg border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-800">{incident.title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-sm text-gray-600">
            <span>Reported: {formatDate(incident.reported_at)}</span>
            <span className="hidden sm:block">•</span>
            <SeverityBadge severity={incident.severity} />
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-center px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-md transition-colors hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <span>Details</span>
          {expanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
        </button>
      </div>
      <div className={`mt-3 text-gray-700 overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96' : 'max-h-0'}`}>
        <div className={`p-3 bg-gray-50 rounded-md transition-opacity ${expanded ? 'opacity-100' : 'opacity-0'}`}>
          {incident.description}
        </div>
      </div>
    </div>
  );
};

export default IncidentCard;