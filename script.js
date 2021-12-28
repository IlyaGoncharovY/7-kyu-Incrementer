function incrementer(nums) {
    let arr = nums.map((n, i) => (n + i + 1) % 10);
    return arr;
}
