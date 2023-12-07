import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white text-black h-screen">
      {/* Navigation Bar */}
      <header className="bg-black p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="app icon.png"
            alt="Protasker Logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-2xl text-white font-semibold">Protasker</h1>
        </div>
        <div>
          <Link to="/login" className="text-white mr-4">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-black px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Introduction Section */}
      <main className="mt-16 container mx-auto px-56 text-center flex flex-col items-center justify-center h-auto">
        <h2 className="text-3xl font-semibold">
          Your tasks, docs, & projects. Together.
        </h2>
        <p className="text-gray-600 mt-4">
          Organize your work, collaborate with your team, and get things done
          efficiently with Protasker.
        </p>
        <Link
          to="/dash"
          className="bg-black text-white px-6 py-3 rounded-lg mt-6 hover:bg-gray-900"
        >
          Try Protasker
        </Link>
        <img
          src="group.png"
          alt="Group"
          className="w-1/3 min-w-[300px] mt-6"
        />

        {/* New Text Below */}
        <section className="flex flex-col md:flex-row w-full items-center py-32">
          <div className="w-full md:w-1/2 mr-auto">
            <p className="text-3xl font-semibold">
              The next gen of notes & docs
            </p>
            <p className="text-gray-600 mt-4">
              Simple. Powerful. Beautiful. Communicate more efficiently with
              Protasker’s flexible building blocks.
            </p>
          </div>
          <div className="w-full md:w-1/2 text-right">
            <img src="doc.png" alt="doc" className="min-w-[300px]" />
          </div>
        </section>

        {/* Projects */}
        <section className="w-full ">
          <div className="w-full md:w-1/2">
            <p className="absolute w-full justify-center my-10 text-[40px] font-semibold mx-7">
              Projects
            </p>
            <p className="absolute w-[500px] text-gray-600 right-32 my-32">
            The "Project" component creates a web dashboard with tabs for managing tasks, notes, and project details. Users can easily switch between tabs, and each tab displays its relevant content (e.g., task list, notes, project details). The design is clean and user-friendly, featuring a title ("Protasker") and a responsive layout.
            </p>
          </div>
          <div className="absolute my-20 w-full md:w-1/2 text-right">
            <img src="project.png" alt="project" className="w-[400px]" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
