import { useEffect, useRef, useState } from "react";
import { FolderItem } from "../data/folderData";
import { File as FileIcon, Folder as FolderIcon } from "lucide-react";

function Folder({
  explorer,
  handleInsertNode,
}: {
  explorer: FolderItem;
  handleInsertNode: (folderId: string, item: FolderItem) => void;
}) {
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showInput, setShowInput] = useState<{
    visible: boolean;
    isFolder: boolean | null;
  }>({
    visible: false,
    isFolder: null,
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    isFolder: boolean
  ) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  const onAddFolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && (e.target as HTMLInputElement).value) {
      setShowInput({ ...showInput, visible: false });
    } else {
      return;
    }
    const time = new Date();
    const item: FolderItem = {
      id: time.getTime().toString(),
      isFolder: showInput.isFolder as boolean,
      name: (e.target as HTMLInputElement).value,
      items: [],
    };
    handleInsertNode(explorer.id, item);
    setToggle(true);
  };

  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between w-full bg-black/30 cursor-default"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        <div className="flex items-center space-x-1">
          <FolderIcon size={20} />
          {explorer.name}
        </div>
        <div className="flex items-center">
          <div
            className="border p-0.5 m-0.5 cursor-pointer"
            onClick={(e) => {
              handleClick(e, true);
            }}
          >
            <p>Folder+</p>
          </div>
          <div
            className="border p-0.5 m-0.5 cursor-pointer"
            onClick={(e) => {
              handleClick(e, false);
            }}
          >
            <p>File+</p>
          </div>
        </div>
      </div>
      {showInput.visible && (
        <div className="pl-5 flex items-center">
          {showInput.isFolder ? (
            <FolderIcon size={15} />
          ) : (
            <FileIcon size={15} />
          )}
          <input
            type="text"
            className="px-1 outline-none"
            autoFocus
            onKeyDown={(e) => onAddFolder(e)}
            ref={inputRef}
          />
        </div>
      )}
      <div className={`pl-5 ${toggle ? "block" : "hidden"}`}>
        {explorer.isFolder &&
          explorer.items?.map((item) => (
            <div key={item.id}>
              {item.isFolder ? (
                <Folder explorer={item} handleInsertNode={handleInsertNode} />
              ) : (
                <div className="flex items-center">
                  <FileIcon size={15} /> <div>{item.name}</div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Folder;
