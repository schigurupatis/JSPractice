/*
Queens Attack II

You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

A queen is standing on an  chessboard. The chess board's rows are numbered from  to , going from bottom to top. Its columns are numbered from  to , going from left to right. Each square is referenced by a tuple, , describing the row, , and column, , where the square is located.

The queen is standing at position . In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals). In the diagram below, the green circles denote all the cells the queen can attack from :

image

There are obstacles on the chessboard, each preventing the queen from attacking any square beyond it on that path. For example, an obstacle at location  in the diagram above prevents the queen from attacking cells , , and :

image

Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at . In the board above, there are  such squares.

Function Description

Complete the queensAttack function in the editor below.

queensAttack has the following parameters:
- int n: the number of rows and columns in the board
- nt k: the number of obstacles on the board
- int r_q: the row number of the queen's position
- int c_q: the column number of the queen's position
- int obstacles[k][2]: each element is an array of  integers, the row and column of an obstacle

Returns
- int: the number of squares the queen can attack

Input Format

The first line contains two space-separated integers  and , the length of the board's sides and the number of obstacles.
The next line contains two space-separated integers  and , the queen's row and column position.
Each of the next  lines contains two space-separated integers  and , the row and column position of .

Constraints

A single cell may contain more than one obstacle.
There will never be an obstacle at the position where the queen is located.
Subtasks

For  of the maximum score:

For  of the maximum score:

Sample Input 0

4 0
4 4
Sample Output 0

9
Explanation 0

The queen is standing at position  on a  chessboard with no obstacles:

image

Sample Input 1

5 3
4 3
5 5
4 2
2 3
Sample Output 1

10
Explanation 1

The queen is standing at position  on a  chessboard with  obstacles:

image

The number of squares she can attack from that position is .

Sample Input 2

1 0
1 1
Sample Output 2

0
Explanation 2

Since there is only one square, and the queen is on it, the queen can move 0 squares.
*/


let n = 5; let k = 3; let r_q = 4; let c_q = 3; let obstacles = [[5, 5], [4, 2], [2, 3]];
function queensAttack(n, k, r_q, c_q, obstacles) {
    // 1. Initialize distances to the edge of the board in all 8 directions
    let up = n - r_q; let down = r_q - 1; let right = n - c_q;let left = c_q - 1;

    let topRight = Math.min(n - r_q, n - c_q);
    let topLeft = Math.min(n - r_q, c_q - 1);
    let bottomRight = Math.min(r_q - 1, n - c_q);
    let bottomLeft = Math.min(r_q - 1, c_q - 1);

    // 2. Iterate through obstacles and shrink the distance if an obstacle is closer
    for (let i = 0; i < k; i++) {
        let r = obstacles[i][0];
        let c = obstacles[i][1];

        // Same column
        if (c === c_q) {
            if (r > r_q) up = Math.min(up, r - r_q - 1);
            else down = Math.min(down, r_q - r - 1);
        }
        // Same row
        else if (r === r_q) {
            if (c > c_q) right = Math.min(right, c - c_q - 1);
            else left = Math.min(left, c_q - c - 1);
        }
        // Diagonals (check if the absolute difference is the same)
        else if (Math.abs(r - r_q) === Math.abs(c - c_q)) {
            if (r > r_q && c > c_q) topRight = Math.min(topRight, r - r_q - 1);
            else if (r > r_q && c < c_q) topLeft = Math.min(topLeft, r - r_q - 1);
            else if (r < r_q && c > c_q) bottomRight = Math.min(bottomRight, r_q - r - 1);
            else if (r < r_q && c < c_q) bottomLeft = Math.min(bottomLeft, r_q - r - 1);
        }
    }
    return up + down + left + right + topRight + topLeft + bottomRight + bottomLeft;
}
console.log(queensAttack(n, k, r_q, c_q, obstacles));