public class Solution {
    public int[] DiStringMatch(string s) {
        int[] list = new int[s.Length+1];
        int left=0;
        int right=s.Length;
        int i=0;
        foreach(char c in s)
        {
            if(c=='I')
            {
                list[i++]=left++;
            }
            else
            {
                list[i++]=right--;
            }
        }
        list[s.Length]=left;
        return list;
    }
}