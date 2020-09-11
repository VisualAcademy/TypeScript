// Y=1+1+2+3+5+8+13+21+34+…
// Y=1+1+2+3 
class 알고리즘_피보나치수열
{
    
    {
        let A = 1;
        let B = 1;
        let Y = 2; 

        let C = 0;
        let N = 4;

        for (let K = 3; K <= N; K++)
        {
            C = A + B; // (1 + 1) => 2
            Y = Y + C;
            A = B;
            B = C; 
        }
    }
}
