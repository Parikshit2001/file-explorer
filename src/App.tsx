import { useState } from "react";
import Folder from "./components/Folder";
import explorer from "./data/folderData";
import { FolderItem } from "./data/folderData";
import useTraverseTree from "./hooks/useTraverseTree";
function App() {
  const [explorerData, setExplorerData] = useState<FolderItem>(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId: string, item: FolderItem) => {
    const finalTree = insertNode(explorerData, folderId, item);
    setExplorerData(finalTree);
  };

  return (
    <div className="w-[350px] p-5">
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
