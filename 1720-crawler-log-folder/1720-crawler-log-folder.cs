public class Solution {
    public int MinOperations(string[] logs) {
        var mainDist = 0;
        foreach (var log in logs) {
            switch(log) {
                case "../":
                    if(mainDist != 0) {
                        mainDist--;
                    }
                    break;
                case "./":
                    break;
                default:
                    mainDist++;
                    break;
            }
        }
        return mainDist;
    }
}