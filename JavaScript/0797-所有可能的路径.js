/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
function allPathsSourceTarget(graph) {
	const result = [];
	function dfs(graph, start, path) {
		if (start === graph.length - 1) {
			result.push([...path]);
			return;
		}
		for (let i = 0; i < graph[start].length; i++) {
			path.push(graph[start][i]);
			dfs(graph, graph[start][i], path);
			path.pop();
		}
	}
	dfs(graph, 0, [0]);
	return result;
}
