import React from 'react';

const DashboardCard = ({ title, content }) => (
  <div className="glass p-4 mb-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {content}
  </div>
);

export default DashboardCard;
