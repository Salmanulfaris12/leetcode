public class Solution {
    public int HeightChecker(int[] heights) {
        var heightsorted=(int[])heights.Clone();
        Array.Sort(heightsorted);
        var count=0;
        for(int i=0;i<heights.Length;i++){
            if(heights[i]!=heightsorted[i]){
                ++count; 
            }
        }
        return count;
    }
}