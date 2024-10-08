class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val diffMap = mutableMapOf<Int, Int>()
        nums.forEachIndexed { index, int -> 
            diffMap[int]?.let { return intArrayOf(it, index) }
            diffMap[target - int] = index   
        }
        return intArrayOf()
    }
}

/**
 * 1.Two Sum
 * https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/