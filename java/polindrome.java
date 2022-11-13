import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        String word = sc.next();
        
        String[] letters = word.split("");
        String reverse = "";
        
        int size = letters.length - 1;
        
        for (int i = 0; i < letters.length; i++) {
            
            reverse += letters[size];
            
            size = size - 1;
        }
        
        if (reverse.equals(word)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        
        /* Enter your code here. Print output to STDOUT. */
        
    }
}



