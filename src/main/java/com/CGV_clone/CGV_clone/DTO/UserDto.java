package com.CGV_clone.CGV_clone.DTO;

public class UserDto {
    private String username;
    private String email;
    private String phone_number;
    private String birth_date;
    private String gender;

    public UserDto(String username, String email, String phone_number, String birth_date, String gender) {
        this.username = username;
        this.email = email;
        this.phone_number = phone_number;
        this.birth_date = birth_date;
        this.gender = gender;
    }

    // getter들
    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public String getBirth_date() {
        return birth_date;
    }

    public String getGender() {
        return gender;
    }
}
