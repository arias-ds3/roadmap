import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Josegs95 {
    public static void main(String[] args) {
        //Ejercicio
        Pattern pattern = Pattern.compile("\\d");
        Matcher matcher = pattern.matcher("En la calle ví 2 coches, 2 perros, 1 señora y 6 farolas");
        while(matcher.find()){
            System.out.println("Match: " + matcher.group());
        }

        //Reto
        System.out.println("\n");
        retoFinal();
    }

    public static void retoFinal(){
        /*Email
            He decidido que los emails son validos si tienen:
            Cadena(1-n) + '.'||'-'||'_'(opcional) + Cadena(1-n)
            @
            Cadena(1-n) + '-'(opcional) + '.' + Cadena(2-3)
         */
        List<String> emailList = getEmailExamples();

        String emailPattern = "^\\w+([.\\-_]?\\w+)*@\\w+(\\-\\w+)?\\.\\w{2,3}$";

        for (String email : emailList){
            System.out.println("\""+ email + "\" es correcto: " + Pattern.matches(emailPattern, email));
        }

        //Número de telefono
        /*He decidido que los número de teléfonos son validos si tienen:
            9 dígitos o
            '+' + 11 dígitos
         */
        List<String> phoneList = getPhoneExamples();

        String phonePattern = "^\\d{9}|\\+\\d{11}$";

        for (String phoneNumber : phoneList){
            System.out.println("\""+ phoneNumber + "\" es correcto: " + Pattern.matches(phonePattern, phoneNumber));
        }

        //URL
        /*He decidido que las URL son validas si tienen:
            'http'|'https''://'(opcional) + (Cadena(1-n) + '.')(opcional) +
            Cadena(1-n) + ('-' + Cadena(1-n))(opcional) + '.' + Cadena(2-3)
         */
        List<String> urlList = getURLExamples();

        //String urlPattern = "^((http|https)?://)?(\\w+\\.)?\\w+\\.\\w{2,3}";
        String urlPattern = "^((http|https)?://)?(\\w+\\.)?[a-zA-Z0-9]+(\\-[a-zA-Z0-9]+)*\\.\\w{2,3}";

        for (String url : urlList){
            System.out.println("\""+ url + "\" es correcta: " + Pattern.matches(urlPattern, url));
        }
    }

    private static List<String> getEmailExamples(){
        List<String> emailList = new ArrayList<>();
        emailList.add("ariasfa7@gmail.com");
        emailList.add("facundo.arias@gmail.com");
        emailList.add("facundo-arias@gmail.com");
        emailList.add("facundo_arias@gmail.com");
        emailList.add("facundo.arias@gmail-gmail.com");

        emailList.add("facundo$arias@gmail.com");
        emailList.add(".facundoarias@gmail.com");
        emailList.add("facundoarias.@gmail.com");
        emailList.add("facundo.arias@.gmailcom");
        emailList.add("facundo.arias@gmailcom.");
        emailList.add("facundo.arias@gmail.com.ar");
        emailList.add("facundo.arias@gmail-com");
        emailList.add("facundo.arias@gmail-.com");

        return emailList;
    }

    private static List<String> getPhoneExamples(){
        List<String> phoneList = new ArrayList<>();
        phoneList.add("666554433");
        phoneList.add("+34666554433");

        phoneList.add("666554433808");
        phoneList.add("66+6554433808");
        phoneList.add("66655");
        phoneList.add("66655plko");

        return phoneList;
    }

    private static List<String> getURLExamples(){
        List<String> urlList = new ArrayList<>();
        urlList.add("https://www.google.ar");
        urlList.add("www.google.ar");
        urlList.add("videos.google.ar");
        urlList.add("google.ar");
        urlList.add("www.google-new.ar");

        urlList.add("hptts://www.google.ar");
        urlList.add(".google.es");
        urlList.add("google.");
        urlList.add("www.goo_gle.ar");
        urlList.add("www.google-.ar");
        urlList.add("www.goo gle.ar");
        urlList.add("www.google.argentina");

        return urlList;
    }

}
