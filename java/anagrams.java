import java.io.*;
import java.util.*;

public class Solution {
    private static Map<String, Integer> countFrequency(String[] letters) {
        Map<String, Integer> lettersFrequency = new HashMap<>();

        for (String letter : letters) {
            Integer value = lettersFrequency.get(letter);

            if (value == null) {
                lettersFrequency.put(letter.toLowerCase(), 1);
            } else {
                lettersFrequency.put(letter.toLowerCase(), ++value);
            }
        }

        return lettersFrequency;
    }

    static boolean isAnagram(String a, String b) {
        Map<String, Integer> lettersFrequencyA = countFrequency(a.split(""));
        Map<String, Integer> lettersFrequencyB = countFrequency(b.split(""));

        Set<String> keySetA = lettersFrequencyA.keySet();
        Set<String> keySetB = lettersFrequencyB.keySet();
        
        ArrayList<Boolean> isAnagram = new ArrayList<>();

        Set<String> moreBiggerSize = keySetA;

        if (keySetA.size() > keySetB.size()) {
            moreBiggerSize = keySetA;
        } else if (keySetB.size() > keySetA.size()) {
            moreBiggerSize = keySetB;
        } else if (keySetA.size() == keySetB.size()) {
            moreBiggerSize = keySetA;
        }

        for (String str : moreBiggerSize) {
            try {
                int valueA = lettersFrequencyA.get(str);
                int valueB = lettersFrequencyB.get(str);


                if (valueA == valueB) {
                    isAnagram.add(true);
                } else {
                    isAnagram.add(false);
                }
            } catch (Exception error) {
                isAnagram.add(false);
            }
        }
        
        if (isAnagram.contains(false)) {
            return false;
        }
        
        return true;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println((ret) ? "Anagrams" : "Not Anagrams");
    }
}
