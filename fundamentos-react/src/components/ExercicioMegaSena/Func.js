const mega = (total) => {
    const nums = []

    for (let i = 0; i < total; i++) {
        let aleatorio = parseInt(Math.random() * (60 - 1) + 1)
        nums.push(aleatorio).toFixed(0)

        for (let j = 0; j < nums.length-1; j++) {
            if (nums[i] == nums[j]) {
                nums[i] + 1;
            }

            if (nums[i] < nums[j]) {
                let bubble = 0;
                bubble = nums[i]
                nums[i] = nums[j]
                nums[j] = bubble
            }
        }
    }

    return nums
}

console.log(mega(6));