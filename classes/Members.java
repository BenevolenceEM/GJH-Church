import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class Members {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String phoneNo;

    //Constructors
    public Members() {
        this.email = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.phoneNo = "";
    }

    public Members(Members m) {
        this.email = m.email;
        this.password = m.password;
        this.firstName = m.firstName;
        this.lastName = m.lastName;
        this.phoneNo = m.phoneNo;
    }

    public Members(String e, String p, String fn, String ln, String pn) {
        this.email = e;
        this.password = p;
        this.firstName = fn;
        this.lastName = ln;
        this.phoneNo = pn;
    }

    //Get and set methods
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public Members login(String email, String password) {
        String request = "SELECT * FROM Members WHERE Email = '" + getEmail()+ "' AND Password = '" + getPassword()+"'";

        try(PreparedStatement stmt = conn.prepareStatement(sql)) {
            System.out.println(request);
            ResultSet rs = stmt.executeQuery(request);
            rs.next();
                setEmail(rs.getString("Email"));
                setPassword(rs.getString("Password"));
                setFirstName(rs.getString("FirstName"));
                setLastName(rs.getString("LastName"));
                setPhoneNo(rs.getString("PhoneNo"));
            rs.close();
        }catch(Exception e) {
            e.printStackTrace();
        }
    }

    public void insertMember() {
        try(PreparedStatement stmt = conn.prepareStatement(sql)) {

        }catch(Exception e) {
            e.printStackTrace();
        }
    }

    public void updateMember() {
        try(PreparedStatement stmt = conn.prepareStatement(sql)) {

        }catch(Exception e) {
            e.printStackTrace();
        }finally {
            System.out.println("Update complete");
        }
    }

    public void deleteMember() {
        try(PreparedStatement stmt = conn.prepareStatement(sql)) {
            String request = "DELETE * FROM Members WHERE Email = '" +getEmail()+ "'";
            stmt.executeUpdate(request);
            String result = n == 1? "Successful" : "Failed";
            System.out.println(result);
        }catch(Exception e) {
            e.printStackTrace();
        }finally {
            System.out.println("Deletion complete");
        }
    }

    public void display() {
        System.out.println("Email: " + this.email);
        System.out.println("Password: " + this.password);
        System.out.println("FirstName: " + this.firstName);
        System.out.println("LastName: " + this.lastName);
        System.out.println("PhoneNo: " + this.phoneNo);
    }

    public static void main(String[] args) {
        Members test = new Members();
        test.login(null, null);
        test.display();

        // Members test1 = new Members();
        // test1.insertMember();
        // test1.display();

        // Members test2 = new Members();
        // test2.updateMember();
        // test2.display();

        // Members test3 = new Members();
        // test3.deleteMember();
        // test3.display();
    }
}