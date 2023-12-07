import React, { useState } from "react";

const DetailPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState(0);
  const [openFigmaDialog, setOpenFigmaDialog] = useState(false);
  const [figmaUrl, setFigmaUrl] = useState("");
  const [openDriveDialog, setOpenDriveDialog] = useState(false);
  const [driveUrl, setDriveUrl] = useState(""); // State for Drive embed URL

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleProgressChange = (event) => {
    setProgress(event.target.value);
  };

  const handleFigmaEmbed = () => {
    setOpenFigmaDialog(true);
  };

  const handleDriveEmbed = () => {
    setOpenDriveDialog(true);
  };

  const handleDialogSubmit = (event, setUrlState, setOpenDialog) => {
    event.preventDefault();
    // Additional validation can be added here if needed
    setUrlState(event.target.elements.url.value);
    setOpenDialog(false); // Close the dialog after submission
  };

  const handleDialogClose = (setOpenDialog) => {
    setOpenDialog(false);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h3 className="text-lg font-semibold mb-2">Title:</h3>
      <input
        className="text-xl font-bold w-full p-2 rounded-md border border-gray-300 focus:outline-none"
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />

      <h3 className="text-lg font-semibold mb-2">Description:</h3>
      <textarea
        className="w-full p-2 rounded-md border border-gray-300 resize-none focus:outline-none"
        value={description}
        placeholder="Description"
        onChange={handleDescriptionChange}
      />

      <div className="flex items-center gap-2">
        <span>Progress:</span>
        <input
          className="w-3/4 rounded-md bg-gray-300"
          type="range"
          value={progress}
          onChange={handleProgressChange}
        />
        <span>{progress}%</span>
      </div>

      <h3 className="text-lg font-semibold mb-2">Designs:</h3>

      <button
        type="button"
        onClick={handleFigmaEmbed}
        className="inline-flex items-center w-fit px-4 py-2 text-white bg-black rounded-xl shadow-sm hover:bg-[#5f5f5f] focus:outline-none"
      >
        Embed Figma Design
      </button>

      {figmaUrl && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Embedded Figma Design:</h3>
          <div dangerouslySetInnerHTML={{ __html: `${figmaUrl}` }} />
        </div>
      )}

        <h3 className="text-lg font-semibold mb-2">Items:</h3>

      <button
        type="button"
        onClick={handleDriveEmbed}
        className="inline-flex items-center w-fit px-4 py-2 text-white bg-[#000] rounded-xl shadow-sm hover:bg-[#5f5f5f] focus:outline-none"
      >
        Embed Drive Items
      </button>

      {driveUrl && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Embedded Drive Items:</h3>
          <div dangerouslySetInnerHTML={{ __html: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="${driveUrl}" allowfullscreen></iframe>` }} />
        </div>
      )}

      {openFigmaDialog && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div
            className="bg-white p-6 rounded-md shadow-md"
            style={{ minWidth: "300px" }}
          >
            <h3 className="text-lg font-semibold mb-4">Enter Figma Embed URL</h3>
            <form onSubmit={(e) => handleDialogSubmit(e, setFigmaUrl, setOpenFigmaDialog)}>
              <input
                autoFocus
                type="text"
                placeholder="Enter Figma embed URL"
                name="url"
                className="w-full p-2 border rounded-md mb-4"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#000] text-white px-4 py-2 rounded-md mr-2"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => handleDialogClose(setOpenFigmaDialog)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {openDriveDialog && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div
            className="bg-white p-6 rounded-md shadow-md"
            style={{ minWidth: "300px" }}
          >
            <h3 className="text-lg font-semibold mb-4">Enter Drive Embed URL</h3>
            <form onSubmit={(e) => handleDialogSubmit(e, setDriveUrl, setOpenDriveDialog)}>
              <input
                autoFocus
                type="text"
                placeholder="Enter Drive embed URL"
                name="url"
                className="w-full p-2 border rounded-md mb-4"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#000] text-white px-4 py-2 rounded-md mr-2"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => handleDialogClose(setOpenDriveDialog)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
