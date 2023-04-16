target = 12
nums = [1 ,6, 10, 15, 23, 1, 2]

def twoSum(nums, target):
    l = [-1 for i in range(target + 1)]
    for i in range(len(nums)):
            l[nums[i]] = i

    for i in range(len(nums)):
        if (nums[i] <= target):
            if (l[nums[i]] != -1 and l[target + 0 - nums[i]] != -1):
                print(l[nums[i]] , 'and', l[target + 0 - nums[i]])
                break

twoSum(nums, target)