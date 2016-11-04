/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int guessNum;
        int left = 1;
        int right = n;
        while (left<right){
            int mid = (left+(right-left)/2);
            int guessRes = guess(mid);
            if (guessRes == 1) left = mid+1;
            else if (guessRes == -1) right = mid-1;
            else return mid;
        }
        return right;
    }
}