import React from 'react';

const TimetableTable = ({ timetable, onDelete }) => (
  <table className="w-full table-auto">
    <thead>
      <tr>
        <th className="p-2">Time</th>
        <th className="p-2">Course</th>
        <th className="p-2">Faculty</th>
        <th className="p-2">Room</th>
        <th className="p-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {timetable.map((item) => (
        <tr key={item._id}>
          <td className="p-2">{item.time}</td>
          <td className="p-2">{item.course}</td>
          <td className="p-2">{item.faculty}</td>
          <td className="p-2">{item.room}</td>
          <td className="p-2">
            <button onClick={() => onDelete(item._id)} className="text-red-500">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TimetableTable;
