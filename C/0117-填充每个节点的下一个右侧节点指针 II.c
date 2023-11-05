// Definition for a Node.
#include <cstddef>
static struct Node {
	int val;
	struct Node* left;
	struct Node* right;
	struct Node* next;
};

static struct Node* connect(struct Node* root) {
	if (!root) {
		return NULL;
	}
	struct Node* q[10001];
	int left = 0, right = 0;
	q[right++] = root;
	while (left < right) {
		int n = right - left;
		struct Node* last = NULL;
		for (int i = 1; i <= n; ++i) {
			struct Node* f = q[left++];
			if (f->left) {
				q[right++] = f->left;
			}
			if (f->right) {
				q[right++] = f->right;
			}
			if (i != 1) {
				last->next = f;
			}
			last = f;
		}
	}
	return root;
}