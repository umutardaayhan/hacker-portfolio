export const getDirectory = (fileSystem, path) => {
  if (path === '/') return fileSystem;
  
  const parts = path.split('/').filter(Boolean);
  let current = fileSystem;
  
  for (const part of parts) {
    const found = current.children?.find(child => child.name === part);
    if (!found || found.type !== 'directory') return null;
    current = found;
  }
  
  return current;
};

export const findFile = (fileSystem, currentPath, fileName) => {
  const dir = getDirectory(fileSystem, currentPath);
  if (!dir) return null;
  
  return dir.children?.find(child => child.name === fileName);
};

export const resolvePath = (currentPath, target) => {
  if (target.startsWith('/')) return target;
  
  const currentParts = currentPath.split('/').filter(Boolean);
  const targetParts = target.split('/').filter(Boolean);
  
  for (const part of targetParts) {
    if (part === '..') {
      currentParts.pop();
    } else if (part !== '.') {
      currentParts.push(part);
    }
  }
  
  return '/' + currentParts.join('/');
};
