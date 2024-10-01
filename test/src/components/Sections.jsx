import React from 'react';

const Sections = () => {
  return (
    <div className="flex-1 flex flex-wrap justify-around p-4">
      {/* Profile Section */}
      <div className="bg-gray-100 flex-1 m-2 p-4 rounded-lg flex items-center justify-center flex-col">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p>Full Stack Developer</p>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-200 flex-1 m-2 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>JavaScript (React, Node.js)</li>
          <li>HTML, CSS, Tailwind CSS</li>
          <li>MongoDB, MySQL</li>
          <li>Python</li>
        </ul>
      </div>

      {/* Project Section */}
      <div className="bg-gray-300 flex-1 m-2 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside">
          <li>Portfolio Website</li>
          <li>Blogging App</li>
          <li>Task Management System</li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="bg-gray-400 flex-1 m-2 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <ul className="list-disc list-inside">
          <li>B.Sc. in Computer Science, XYZ University (2020 - 2023)</li>
          <li>M.Sc. in Software Engineering, ABC University (2023 - Present)</li>
        </ul>
      </div>
    </div>
  );
};

export default Sections;
