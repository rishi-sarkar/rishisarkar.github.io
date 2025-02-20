const Projects = () => (
  <div>
    <h1 className="text-3xl text-blue-600 mb-4">My Projects</h1>
    <div className="bg-blue-100 p-4 mb-4 rounded">
      <h2 className="text-2xl text-blue-900">Project 1</h2>
      <p>Description of the first project. <a href="https://github.com/rishi-sarkar/Lego-Retrieving-Robot" className="text-blue-700 underline">View on GitHub</a></p>
    </div>
    <div className="bg-blue-100 p-4 rounded">
      <h2 className="text-2xl text-blue-900">Project 2</h2>
      <p>Description of the second project. <a href="https://github.com/rishi-sarkar/Lego-Retrieving-Robot" className="text-blue-700 underline">View on GitHub</a></p>
    </div>
  </div>
);

export default Projects;
