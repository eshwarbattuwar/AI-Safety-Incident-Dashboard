import React from 'react';
import { Severity } from '../types/incident';

interface SeverityBadgeProps {
  severity: Severity;
}

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const getBadgeClasses = (): string => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium inline-block";
    
    switch (severity) {
      case 'Low':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Medium':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'High':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return baseClasses;
    }
  };

  return (
    <span className={getBadgeClasses()}>
      {severity}
    </span>
  );
};

export default SeverityBadge;