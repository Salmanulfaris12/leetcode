/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
   let count =0
   let row =grid.length
   let cols=grid[0].length

    for(i=0;i<row;i++){
        for(j=cols-1;j>=0;j--){
            if(grid[i][j]<0){
                count++
            }
            else{
                break;
            }
        }
    }
    return count
};