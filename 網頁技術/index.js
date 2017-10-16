var d1 = 4;
var d2 = 4;
var d3 = 4;
var array_dungeon = new Array(d1);
for(i = 0; i < d2; i++) {
  array_dungeon[i] = new Array(d2);
  for(j = 0; j < d3; j++) {
    array_dungeon[i][j] = new Array(d3);
  }
}
array_dungeon[0][0] = [0,0,1,0];
array_dungeon[0][1] = [0,1,1,0];
array_dungeon[0][2] = [0,1,1,1];
array_dungeon[0][3] = [0,0,1,1];
array_dungeon[1][0] = [1,1,1,0];
array_dungeon[1][1] = [1,0,0,1];
array_dungeon[1][2] = [1,1,1,0];
array_dungeon[1][3] = [1,0,1,1];
array_dungeon[2][0] = [1,1,1,0];
array_dungeon[2][1] = [0,0,1,1];
array_dungeon[2][2] = [1,0,1,0];
array_dungeon[2][3] = [1,0,1,0];
array_dungeon[3][0] = [1,0,0,0];
array_dungeon[3][1] = [1,1,0,0];
array_dungeon[3][2] = [1,0,0,1];
array_dungeon[3][3] = [1,1,1,1];

