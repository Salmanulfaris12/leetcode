/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n=matrix.length;
    
    for(i=0;i<n;i++){
        for(j=i;j<n;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
        }
    }
    for(i=0;i<n;i++){
        matrix[i]=matrix[i].reverse()
    }
    return matrix
};