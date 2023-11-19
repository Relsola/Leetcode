function removeElement(nums: number[], val: number): number {
    let fast: number = 0;
    let slow: number = 0;
    const n: number = nums.length;
    while (fast < n) {
        if (nums[fast] === val) {
            fast++;
            continue;
        }
        nums[slow++] = nums[fast++];
    }
    return slow;
}
