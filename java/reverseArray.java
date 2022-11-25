import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {
    public static List<Integer> reverseArray(List<Integer> array) {
        List<Integer> reverseArrayList = new ArrayList<>();
        
        int lastPosition = array.size() - 1;
        
        for (int i = 0; i < array.size(); i++) {
            reverseArrayList.add(array.get(lastPosition));
            
            lastPosition--;
        }
        
        return reverseArrayList;
    }

    public static void main(String[] args) throws IOException {
        List<Integer> numbersList = new ArrayList<>();

        numbersList.add(1);
        numbersList.add(2);
        numbersList.add(3);
        numbersList.add(4);
        numbersList.add(5);

        System.out.println(reverseArray(numbersList));
    }
}
