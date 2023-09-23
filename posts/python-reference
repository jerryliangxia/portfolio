---
title: "Python Reference Manual"
publishedAt: "2022-09-10"
summary: "Accompanies all Python enthusiasts"
---

**Last updated:** Sept 13, 2023

This post is dedicated to digitize Python's functionalities to enable easier access for myself and others. This should cover the basics of Python's built-in data structures as well as some less obvious parts of the language's syntax. This post will also likely get updated frequently as I add new things, fix mistakes, etc.

## Data Structures and Other Basics

### Lists and Strings

Lists in python are very similar to strings. Here are some operations/functions you can perform on both lists and strings:

```python
# Convert list to string
new_string = ''.join(map(str, list1))

# Reverse list or string
s = "Hello World!"[::-1]
s = s[::-1]
# returns "dlroW olleH"

# Obtaining length from two indices
length = r - l + 1

# Join two lists
list3 = list1 + list2
# Note that this means list2 has to be a list:
s = 'abcdef'
list3 = list1 + [s[0]]

# Reverse iteration
for i in range(len(nums)):
    cur = digits[len(digits)-i-1]

# Parsing a list/string from a specific index
new_arr = arr[1:]

# Basic list/string parsing
new_str = str[start:end]
remove_three_from_end = str[:len(list1)-3]
remove_one_from_start = str[1:]
remove_all_but_i = nums[:i]+nums[i+1:]

# Extracting a substring with index pointers l and r:
s = "ADOBECODEBANC"
s[0:4] == "ADOB"
```

### Lists

List-specific tips:

- If you're using the first element of the array, remember to extract from the list starting at the 1-indexed element.
- If you're using a table for DP, make the DP table the same length as the input array.

Here are some functionalities that only apply to lists:

```python
# Appending to the start of the list (takes O(n) time)
l.insert(0, num)

# Sets
set(nums)

# Zip together two iterables and traverse through them simultaneously
for char, pattern_char in zip(word, pattern):
    ...

# Create set of distinct elements without a specific element
new_set = set(nums) - {0}
new_set = set(list1) - {var}

# Flatten a list using list comprehension (can be used multiple times)
flat_list = [item for sublist in l for item in sublist]
# this is the same as ...
flat_list = []
for sublist in l:
    for item in sublist:
        flat_list.append(item)

# get sum of all even elements in list
S = sum(x for x in nums if x % 2 == 0)

# A stack and its operations
stack = []
stack.pop()
stack.append(val)

# A queue and its operations
queue = []
queue.pop(0)
queue.append(val)
```

### Strings

Helpful operations that only work on strings:

```python
# Sort a string a based on character values
temp = ''.join(map(str, sorted(a)))

# Another example of the above: reversing every word in a string individually
return ' '.join(x[::-1] for x in s.split())

# Substituting values in a string s - in this case a-z and 0-9
s = re.sub("[^a-z|^0-9]","",s.lower())
```

### Dictionaries

```python
# Incrementing a count for a specific key 'num'
d[num] = d.get(num, 0) + 1

# Counter dictionary which stores frequencies of all unique characters in a list/string t.
dict_t = Counter(t)

# Creating [key, value] list items from a dictionary
new_list = [[k, v] for k,v in dict.items()]

# Sorting, based on values
dict_sorted_based_on_values = dict(sorted(d.items(), key=lambda item:item[1]))
# Sorting based on keys is simple
dict_sorted_based_on_keys = sorted(d)
# Sort by keys and reverse the order
keys = sorted(dict.keys(), reverse=True)
```

### Heaps

These heaps are implemented with `heapq`.

```python
import heapq

# Initialize a heap
arr = [1,2,4,5,6,7]
heapq.heapify(arr)

# Maintain the heap (popping, pushing)
heapq.heappop(arr)
heapq.heappush(arr, num)

# Get the top of the heap, treat it as a list
return arr[0]

# Max heap: just make all the elements negative. Using list comprehension:
nums = [-num for num in nums]

# Other operations are as follows:
heapq.heappush(nums, -newNum)
poppedValue = -heapq.heappop(nums)
return -nums[0]
```

### Numbers

```python
# Python's equivalent of max and min integer values
min, max = float('-inf'), float('inf')

# Convert binary string to integer
int('1111111', 2)
```

### Classes

```python
# Using a global variable and helper function - example
class Solution(object):
    def main(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        global out
        out = 0

        def helper(root):
            global out

            if not root:
                return 0
            left = valueSum(root.left)
            right = valueSum(root.right)
            tilt = abs(left - right)
            out += tilt
            return left + right + root.val

        helper(root)
        return out

# Using a non-nested function declaration:
class Solution(object):
    # DFS
    def permute(self, nums):
        res = []
        self.dfs(nums, [], res)
        return res

    def dfs(self, nums, path, res):
        if not nums:
            res.append(path)
        for i in xrange(len(nums)):
            self.dfs(nums[:i]+nums[i+1:], path+[nums[i]], res)

# Using an __init__ function:
class Solution(object):
    def __init__(self):
        self.total = 0

    def convertBST(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode

        right, root, left
        """

        if root:
            self.convertBST(root.right)
            self.total += root.val
            root.val = self.total
            self.convertBST(root.left)
        return root
```
