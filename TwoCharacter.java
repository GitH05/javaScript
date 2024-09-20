import java.util.Scanner;

public class TwoCharacter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = scanner.nextLine().trim();
        
        String longest = "", current = "";
        
        for (int i = 0; i < str.length(); i++) {
            if (current.isEmpty() || str.charAt(i) != current.charAt(current.length() - 1)) {
                current += str.charAt(i);
            } else {
                if (current.length() > longest.length()) longest = current;
                current = "" + current.charAt(current.length() - 1) + str.charAt(i);
            }
        }
        
        if (current.length() > longest.length()) longest = current;

        System.out.println("Longest alternate character substring: " + longest);
        System.out.println("Length: " + longest.length());
        scanner.close();
    }
}
