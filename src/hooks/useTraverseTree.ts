import { FolderItem } from "../data/folderData";

function useTraverseTree() {
  function insertNode(tree: FolderItem, folderId: string, item: FolderItem) {
    if (tree.id === folderId) {
      if (item.isFolder) {
        tree.items?.unshift(item);
      } else {
        tree.items?.push(item);
      }
      return tree;
    }
    let latestNode: FolderItem[] = [];
    latestNode = tree.items?.map((ob) =>
      insertNode(ob, folderId, item)
    ) as FolderItem[];
    return { ...tree, latestNode };
  }
  return { insertNode };
}

export default useTraverseTree;
