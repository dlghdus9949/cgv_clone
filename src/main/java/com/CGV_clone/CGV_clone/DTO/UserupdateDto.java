package com.CGV_clone.CGV_clone.DTO;

public class UserupdateDto {
    private String userName;
    private String email;
    private String password;
    private String birthDate;
    private String gender;

    // 기본 생성자
    public UserupdateDto() {}

    // 모든 필드를 받는 생성자
    public UserupdateDto(String userName, String email, String password, String birthDate, String gender) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.gender = gender;
    }

    // Getters and Setters
    public String getUserName() {
        return userName;
    }

    public void setUsername(String username) {
        this.userName = userName;
    }

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

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirth_date(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
