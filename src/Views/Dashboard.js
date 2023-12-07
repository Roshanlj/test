import React from "react";
import TaskPage from "./TaskPage";
import NotePage from "./NotePage";
import DetailPage from "./DetailPage";

function Dashboard() {
  const [selectedTab, setSelectedTab] = React.useState("tasks");

  const tabs = {
    tasks: {
      title: "Tasks",
      content: (
        <TaskPage/>
      ),
    },
    notes: {
      title: "Notes",
      content: (
        <NotePage/>
      ),
    },
    project: {
      title: "Details",
      content: (
        <DetailPage/>
        ),
      },
    };
  
    return (
      <div className="flex flex-col h-screen bg-white p-4">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-slate-700">Protasker</h1>
          <nav className="flex gap-2">
            {Object.keys(tabs).map((tabKey) => (
              <button
                key={tabKey}
                className={`rounded-md shadow-sm px-4 py-2 text-base font-medium text-slate-700 hover:bg-gray-50 ${
                  selectedTab === tabKey ? "bg-gray-50" : ""
                }`}
                onClick={() => setSelectedTab(tabKey)}
              >
                {tabs[tabKey].title}
              </button>
            ))}
          </nav>
        </header>
        <main className="flex flex-col overflow-y-auto gap-4">{tabs[selectedTab].content}</main>
      </div>
    );
  }
  
  export default Dashboard;
  