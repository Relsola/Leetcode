/**
 * @description 深度搜索优先
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
  function dfs(key, rooms, visited) {
    if (visited[key]) {
      return;
    }
    visited[key] = true;
    for (const k of rooms[key]) {
      dfs(k, rooms, visited);
    }
  }

  const n = rooms.length;
  const visited = new Array(n).fill(false);
  dfs(0, rooms, visited);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      return false;
    }
  }
  return true;
}

/**
 * @description 广度搜索优先
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
  function bfs(key, rooms, visited) {
    const stack = [...rooms[key]];
    visited[key] = true;
    while (stack.length !== 0) {
      const k = stack.shift();
      if (!visited[k]) {
        stack.push(...rooms[k]);
        visited[k] = true;
      }
    }
  }

  const n = rooms.length;
  const visited = new Array(n).fill(false);
  bfs(0, rooms, visited);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      return false;
    }
  }
  return true;
}
