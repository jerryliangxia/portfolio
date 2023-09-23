---
title: "LeetCode Questions"
publishedAt: "2022-09-19"
summary: "LeetCode problems I found nice"
---

**Last updated:** October 30, 2022

These are a list of questions I've come across that have helped me better my LeetCoding skills.

<br/>
Some good questions to start with (I'd recommend in order):

- [Shuffle String](https://leetcode.com/problems/shuffle-string/)
- [Is Subsequence](https://leetcode.com/problems/is-subsequence/)
- [Check if two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)
- [Count Items Matching a Rule](https://leetcode.com/problems/count-items-matching-a-rule/)
- [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
- [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)
- [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)
- [TwoSum](https://leetcode.com/problems/two-sum/)
- [Move Zeroes](https://leetcode.com/problems/move-zeroes/), [Remove Duplicates](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- [Reverse Integer](https://leetcode.com/problems/reverse-integer/), [Palindrome Number](https://leetcode.com/problems/palindrome-number/)
- [Rotate Array](https://leetcode.com/problems/rotate-array/)
- [First Bad Version](https://leetcode.com/problems/first-bad-version/)
- [Search Insert Position](https://leetcode.com/problems/search-insert-position/)
- [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

Questions with neat tricks I found:

1. [Maximum Product of Two Elements in an Array](https://leetcode.com/submissions/detail/800054009/): Keeping track of min and max values
2. [Make Array Zero by Subtracting Equal Amounts](https://leetcode.com/submissions/detail/800061115/): Great use of a set and its importance

Things to think about...

- Can you shorten/**filter** what you are to iterate through? Maybe shorten a list by making it into a tuple of `(index, item)` entries?
- Iterating through the input isn't terrible; sometimes solving a problem depends on how sound the logic can be.
- Consider the case in which the intended action isn't ever made. How do you navigate that? (ex: Move Zeroes)

### Arrays

#### [Reverse Integer](https://leetcode.com/submissions/detail/796352677/): Basic math operations

```python
# Always have a running sum
runningSum = 0
while x != 0:
    runningSum = runningSum * 10 + x % 10
    x /= 10

# Another way (checking integer palindrome). This solution doesn't work with x being some multiple of 10.
if x < 0 or (x % 10 == 0 and x != 0):
    return False

halfReversedInteger = 0
while x > halfReversedInteger:
    halfReversedInteger = halfReversedInteger * 10 + x % 10
    x /= 10
return halfReversedInteger == x or halfReversedInteger == x / 10
```

#### [Plus One](https://leetcode.com/problems/plus-one/): Basic array and math operations

```python
# Adding into an array
def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]

        cur = digits[len(digits)-i-1]
        """
        carry = 1
        for i in range(len(digits)):
            if carry == 0:
                break
            cur = digits[len(digits)-i-1]
            cur += carry
            carry = cur/10
            cur %= 10
            digits[len(digits)-i-1] = cur
        if carry == 1:
            digits.insert(0, 1)
        return digits
```

### Binary Search

#### [Search Insert Position](https://leetcode.com/problems/search-insert-position/): Basic binary search algorithm

```python
# This searches for an index where a target lies

# You return l because once the target is found, r will be greater than l.
l, r = 0, len(nums)-1
while l <= r:   # important: should be <= not <
    mid = (l + r)/2
    if nums[mid] == target:
        return mid
    if nums[mid] < target:
        l = mid + 1
    else:
        r = mid - 1
return l
```

#### [Remove Element](https://leetcode.com/problems/remove-element/): Remove an element from list using in-place array operations

```python
def removeElement(self, nums, val):
    """
    :type nums: List[int]
    :type val: int
    :rtype: int

    have a slow and fast pointer
    slow will always be alongside nums if the array has no numbers to swap
    otherwise, slow will always settle at some duplicate value and wait until
    some different value is reached, for then it will swap
    """
    j = 0
    for i, a in enumerate(nums):
        if nums[i] != val:
            nums[i], nums[j] = nums[j], nums[i]
            j += 1
    return j
```

### Binary Trees

#### [Search in a BST](https://leetcode.com/problems/search-in-a-binary-search-tree/): Binary Search in a BST implementation

```python
def searchBST(self, root, val):
    """
    :type root: TreeNode
    :type val: int
    :rtype: TreeNode
    """
    if not root:
        return None
    if root.val == val:
        return root
    elif root.val > val:
        return self.searchBST(root.left, val)
    else:
        return self.searchBST(root.right, val)
```

#### [Find Mode in BST](https://leetcode.com/problems/find-mode-in-binary-search-tree/): Basic BFS implementation

```python
def findMode(self, root):
    """
    :type root: TreeNode
    :rtype: List[int]
    """
    d = {}
    if not root:
        return []
    q = [root]
    maxCount = 0
    while q:
        size = len(q)
        for i in range(size):
            node = q.pop(0)
            d[node.val] = d.get(node.val, 0) + 1
            maxCount = max(maxCount, d[node.val])
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
    out = []
    for k, v in d.items():
        if v == maxCount:
            out.append(k)
    return out
```

#### [Maximum Depth of a Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/): Basic DFS implementation

```python
def maxDepth(self, root):
    """
    :type root: TreeNode
    :rtype: int

    using dfs
    """
    def helper(root, count):
        if not root:
            return 0
        left = helper(root.left, count) + 1
        right = helper(root.right, count) + 1
        return max(left, right)

    return helper(root, 0)
```

### Double Hashmap

#### [Find and Replace Pattern](https://leetcode.com/submissions/detail/802391843/), [Isomorphic Strings](https://leetcode.com/submissions/detail/802353299/): Double hashmap implementation

```python
def findAndReplacePattern(self, words, pattern):
    """
    :type words: List[str]
    :type pattern: str
    :rtype: List[str]
    """
    out = []
    for word in words:
        isValid = True
        pattern_dict = {}
        word_dict = {}
        for char, pattern_char in zip(word, pattern):
            if char not in word_dict and pattern_char not in pattern_dict:
                pattern_dict[pattern_char] = char
                word_dict[char] = pattern_char
            elif pattern_dict.get(pattern_char) != char and word_dict.get(char) != pattern_char:
                isValid = False
                break
        if isValid:
            out.append(word)
    return out

def isIsomorphic(self, s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    s_dict = {}
    t_dict = {}
    for s_char, t_char in zip(s, t):
        # need to check mutual exclusivity; not just one dict
        if s_char not in s_dict and t_char not in t_dict:
            s_dict[s_char] = t_char
            t_dict[t_char] = s_char
        elif s_dict.get(s_char) != t_char and t_dict.get(t_char) != s_char:
            return False
    return True
```

### Min and Max Heaps

Here are two questions, one for min heap and another for max heap, that use `heapq`.

#### [Kth Largest Element in a Stream](https://leetcode.com/submissions/detail/800049886/): Min Heap class implementation

```python
class KthLargest(object):

    def __init__(self, k, nums):
        """
        :type k: int
        :type nums: List[int]
        """
        self.k = k
        self.heap = nums
        heapq.heapify(self.heap)

        while len(self.heap) > k:
            heapq.heappop(self.heap)

    def add(self, val):
        """
        :type val: int
        :rtype: int
        """
        heapq.heappush(self.heap, val)
        if len(self.heap) > self.k:
            heapq.heappop(self.heap)
        return self.heap[0]
```

#### [Last Stone Weight](https://leetcode.com/submissions/detail/800068548/): Max Heap implementation

```python
def lastStoneWeight(self, stones):
    """
    :type stones: List[int]
    :rtype: int

    make stones into a heap
    heap has O(1) access time, O(logn) insert/delete time
    """

    stones = [-stone for stone in stones]
    heapq.heapify(stones)
    while len(stones) > 1:
        one, two = -heapq.heappop(stones), -heapq.heappop(stones)
        result = one - two
        if result != 0:
            heapq.heappush(stones, -result)
    if stones:
        return -stones[0]
    return 0
```

### Sliding Window

#### [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/): Medium-level sliding window implementation

```python
def minWindow(self, s, t):
    '''
    This problem involves finding the minimum substring given a pattern to
    match, t, and a string s. The function returns the minimum substring in s
    for which all the characters of t are present.

    Have a left and right pointer for this window: l, r

    Have a dictionary that can keep track of this requirement with
    each character examined, and compare this to the original
    string for which you are comparing: window_counts, dict_t

    Have two variables to keep track of the basic requirement to
    be met, so that the logic is simplified: formed, required

    Increment r at the end of the iteration
    (this is where you expand the window from the right)

    Increment l within the r iteration
    (this is where you shrink the window from the left)
    '''

    # Check for empty strings
    if not t or not s:
        return ""

    # Initialization
    l, r = 0, 0
    dict_t = Counter(t)
    formed = 0
    required = len(dict_t)
    window_counts = {}  # This is the dictionary you need.
    ans = float('inf'), None, None  # The answer is stored as a tuple, to be parsed later.

    # Logic
    while r < len(s):
        char = s[r]

        # Update window_counts, and update if the requirement is met or not.
        window_counts[char] = window_counts.get(char, 0) + 1
        if char in dict_t and window_counts[char] == dict_t[char]:
            formed += 1

        # Change the left window while the requirement is met (formed == required). You can override char here.
        while l <= r and formed == required:
            char = s[l]

            # Update the answer, whatever that may be.
            curAns = r - l + 1
            if curAns < ans[0]:
                ans = (curAns, l, r)

            # Then, update the window, checking if the requirement is met. Important: window_counts[char] < dict_t[char] is the check here.
            window_counts[char] -= 1
            if char in dict_t and window_counts[char] < dict_t[char]:
                formed -= 1

            # Continue minimizing from the left.
            l += 1

        # Continue expanding to the right.
        r += 1

    # Return
    return "" if ans[0] == float('inf') else s[ans[1]:ans[2]+1]
```

Adding an optimization to the problem... we can instead filter the string and iterate through this filtered string. We'd just have to make sure that we store the index and the character, such that each entry in the list is a tuple of `(index, character)`.

```python
def revisedMinWindow(self, s, t):

    window_counts = {}
    dict_t = Counter(t)
    l, r = 0, 0
    formed = 0
    required = len(dict_t)
    ans = float('inf'), None, None

    # Here we have the filtered string, filtered_s
    filtered_s = []
    for i, char in enumerate(s):
        if char in dict_t:
            filtered_s.append((i, char))

    while r < len(filtered_s):
        char = filtered_s[r][1]

        window_counts[char] = window_counts.get(char, 0) + 1
        if char in dict_t and window_counts[char] == dict_t[char]:
            formed += 1

        while l <= r and formed == required:
            char = filtered_s[l][1]

            # recalculate answer
            start = filtered_s[l][0]
            end = filtered_s[r][0]
            curAns = end - start + 1
            if curAns < ans[0]:
                ans = (curAns, start, end)

            window_counts[char] -= 1
            if char in dict_t and window_counts[char] < dict_t[char]:
                formed -= 1

            l += 1
        r += 1
    return "" if ans[0] == float('inf') else s[ans[1]:ans[2]+1]
```

Time Complexity: In the worst case, we iterate through the length of the filtered string, `filtered_s`, twice. This happens when you have, for example, `s = "aaaaaaa"` and `t = "a"`. In this case, both left and right pointers situate on the same index for the entirety of the string, leading to a complexity of `2 * len(filtered_s)`.

#### [Longest Repeating Character Replacement](https://leetcode.com/submissions/detail/803289406/): Medium-level sliding window implementation

```python
def characterReplacement(self, s, k):
    """
    :type s: str
    :type k: int
    :rtype: int

    have a sliding window that uses the following operation:

    cellCount = r - l + 1
    if cellCount - max(window_counts.values()) <= k:
        out = max(out, cellCount)

    otherwise, discard the leftmost element

    this way, a window of always maximally found size will be
    considered. However, we have to find the max frequency each
    time we make this calculation (iterate through a 26 key dictionary)
    """
    l = 0
    window_counts = {}
    out = 0
    for r in range(len(s)):

        if not s[r] in window_counts:
            window_counts[s[r]] = 0
        window_counts[s[r]] += 1

        cellCount = r - l + 1
        if cellCount - max(window_counts.values()) <= k:
            out = max(out, cellCount)
        else:
            window_counts[s[l]] -= 1
            if not window_counts[s[l]]:
                window_counts.pop(s[l])
            l += 1
    return out
```

### Palindromes

See first [Valid Palindrome](https://leetcode.com/submissions/detail/803107754/); this is a basic palindrome implementation.

#### [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/): Hard-level palindrome substring question, recursion, DFS

```python
class Solution(object):
    def partition(self, s):
        """
        :type s: str
        :rtype: List[List[str]]

        This problem is based on substring palindromes. When you find a substring
        that is a palindrome, you add it to a list and continue working on this list,
        passing it down with each recursive step. Essentially, this is like finding
        the next palindrome in a string s, with s being the shortened string.

        So, find a palindrome (a substring, and do this from the start of the string)
        -> and then discover what's left in the remaining string.
        """
        def dfs(s, curList, start, output):
            if start == len(s):
                # the end of the dfs is reached. Append the curList to the output array
                output.append(curList)
                return
            for end in range(start, len(s)):
                # this for loop exists so that we look for a start point beyond the
                # characters we already see
                if isPalindrome(s, start, end):
                    # add to list, keep searching in rest of string
                    dfs(s, curList + [s[start:end + 1]], end + 1, output)

        def isPalindrome(s, l, r):
            # This is just here for brute force on any given string s.
            while l < r:
                if s[l] != s[r]:
                    return False
                l, r = l + 1, r - 1
            return True

        output = []
        dfs(s, [], 0, output)
        return output
```

#### [Longest Palindromic Substring](https://leetcode.com/submissions/detail/803255943/), [Palindromic Substrings](https://leetcode.com/submissions/detail/803290310/): Medium-level palindrome substring question, palindrome expansion by center. Shown below, respectively.

```python
"""
In these types of problems, you have to iterate through the
entire array, and expand from the center of the current index i.
In this, you have (i, i) and (i, i + 1) for your indices, representative
of palindromes such as "dad" and "abba" respectively.
"""

class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        def helper(s, l, r):
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l, r = l - 1, r + 1 # expand from center
            return s[l+1:r]

        res = ""
        for i in range(len(s)): # despite the i + 1 below, we still have len(s)
            for l, r in [(i, i), (i, i + 1)]:
                temp = helper(s, l, r)
                if len(temp) > len(res):
                    res = temp
        return res

    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        def countPalindromesInSubstring(s, l, r):
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l, r = l - 1, r + 1
            # Before it is returned, l and r increment one more time. Thus, (r-l) / 2 == the length of the string / 2.
            return (r-l) / 2

        out = 0
        for i in range(len(s)):
            for l, r in [(i, i), (i, i + 1)]:
                out += countPalindromesInSubstring(s, l, r)
        return out
```
