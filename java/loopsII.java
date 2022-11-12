import java.util.*;
import java.io.*;

class Solution{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        
        String numbers = "";
        int previousNumber = 1;
        
        ArrayList<Integer> valuesA = new ArrayList<>();
        ArrayList<Integer> valuesB = new ArrayList<>();
        ArrayList<Integer> valuesN = new ArrayList<>();
        
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            
            valuesA.add(a);
            valuesB.add(b);
            valuesN.add(n);
            
            int indexA = valuesA.get(i);
            int indexB = valuesB.get(i);
            int indexN = valuesN.get(i);
            String calculate = "";
            
            for (int j = 0; j < indexN; j++) {
                Double elevator = Math.pow(2, j);

                int baseForm = indexA + (1 * indexB);

                if (j == 0) {
                    previousNumber = baseForm;
                } else {
                    previousNumber += elevator * indexB;
                }
                
                calculate += previousNumber + " ";
            }
            
            numbers = calculate;
            
            System.out.println(numbers);
        }

        in.close();
    }
}
