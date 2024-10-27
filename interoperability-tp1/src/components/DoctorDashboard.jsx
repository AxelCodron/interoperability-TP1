import { useState } from "react";
import "./Dashboard.css";
import folderData from "../data/folderData";
import Folder from "./Folder";
import useTraverseTree from "../hooks/use-traverse-tree";

function DoctorDashboard() {
  const [explorerData, setExplorerData] = useState(folderData);
  const { insertNode, deleteNode, updateNode } = useTraverseTree();
  const handleInsertNode = (folderId, itemName, isFolder) => {
    const finalItem = insertNode(explorerData, folderId, itemName, isFolder);
    return finalItem;
  };
  const handleDeleteNode = (folderId) => {
    // Call deleteNode to get the modified tree
    const finalItem = deleteNode(explorerData, folderId);
    // Update the explorerData state with the modified tree
    setExplorerData(finalItem);
  };

  const handleUpdateFolder = (id, updatedValue, isFolder) => {
    const finalItem = updateNode(explorerData, id, updatedValue, isFolder);
    // Update the explorerData state with the modified tree
    setExplorerData(finalItem);
  };

  return (
    <div className="DoctorDashboard">
      <div className="folderContainerBody">
        <div className="folder-container">
          <Folder
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
            handleUpdateFolder={handleUpdateFolder}
            explorerData={explorerData}
          />
        </div>
        <div className="empty-state">Your content will be here</div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
