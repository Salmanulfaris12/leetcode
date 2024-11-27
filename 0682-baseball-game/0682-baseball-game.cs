public class Solution {
    public int CalPoints(string[] operations) {
        List<int>Scores=new();
        for(int i=0;i<operations.Length;i++){
            if(int.TryParse(operations[i],out int value)){
                Scores.Add(value);
            }
            else if(operations[i]=="C"){
              if(Scores.Count>0){
                  Scores.RemoveAt(Scores.Count-1);
              }
            }
            else if(operations[i]=="D"){
                Scores.Add(Scores[Scores.Count-1]*2);
            }
            else if(operations[i]=="+"){
                Scores.Add(Scores[Scores.Count-1]+Scores[Scores.Count-2]);
            }
        }
        return Scores.Sum();
    }
}