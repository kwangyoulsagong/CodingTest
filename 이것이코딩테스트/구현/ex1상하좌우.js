//여행가 A는 NXN 크기의 정사각형 공간 위에 서 있음
//공간으 1X1크기의 정사각형으로 나누어짐
// rkwkd 왼쪽 위 좌표는 (1,1)
//가장 오른쪽 아래 좌표는 (N,N)
//A는 상, 하, 좌, 우 방향으로 이동할 수 있음
//사작 좌표는 항상 1,1
//L,R,U,D
//여행자가 NXN 크기의 정사각형 공간을 벗어나는 움직음은 무시
//예시 n=5 R R R U D D 1,1-> 1,2 1,3 1,4 2,4 3,4로 도착

const n = 5;
const route = ["R", "R", "R", "U", "D", "D"];
