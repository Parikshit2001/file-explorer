interface FolderItem {
  id: string;
  name: string;
  isFolder: boolean;
  items?: FolderItem[];
}

const explorer: FolderItem = {
  id: "0",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "5",
      name: "images",
      isFolder: true,
      items: [
        {
          id: "6",
          name: "logo.png",
          isFolder: false,
        },
      ],
    },
    {
      id: "1",
      name: "src",
      isFolder: true,
      items: [
        { id: "2", name: "index.html", isFolder: false },
        {
          id: "3",
          name: "style.css",
          isFolder: false,
        },
        {
          id: "4",
          name: "script.js",
          isFolder: false,
        },
      ],
    },
    {
      id: "7",
      name: "dist",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      id: "8",
      name: "components",
      isFolder: true,
      items: [
        {
          id: "9",
          name: "Folder.tsx",
          isFolder: false,
        },
      ],
    },
    {
      id: "10",
      name: "package.json",
      isFolder: false,
    },
    {
      id: "11",
      name: "tsconfig.json",
      isFolder: false,
    },
    {
      id: "12",
      name: "tsconfig.app.json",
      isFolder: false,
    },
    {
      id: "13",
      name: "tsconfig.node.json",
      isFolder: false,
    },
  ],
};

export type { FolderItem };
export default explorer;
