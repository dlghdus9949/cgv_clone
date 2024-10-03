//package com.CGV_clone.CGV_clone.domain;
//
//import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import java.time.LocalDate;
//import java.time.LocalDateTime;
//
//@NoArgsConstructor
//@Getter
//@Entity
//public class Member {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY) // id 자동 증가
//    private Long id;
//
//    @Column(unique = true)
//    private String userId;
//    private String passWord;
//
//    @Setter
//    @Column(unique = true) // 중복된 값이 들어가는 것을 막음
//    private String email;
//    @Setter
//    private String name;
//
//    private Long phoneNumber;
//    private LocalDate birthDate; //생년월일
//
//    @Enumerated(EnumType.STRING)
//    private Gender gender;
//    private LocalDateTime createAt;
//
//    public void prePersist() {
//        this.createAt = LocalDateTime.now();
//    }
//
//
//    public Member(String userId, Long phoneNumber, LocalDate birthdate, String passWord, String name, String email, Gender gender) {
//        this.userId = userId;
//        this.setPassword(passWord);
//        this.name = name;
//        this.email = email;
//        this.gender = gender;
//        this.phoneNumber = phoneNumber;
//        this.birthDate = birthdate;
//        this.createAt = LocalDateTime.now();
//    }
//
//    private static final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//
//    public void setPassword(String password) {
//        this.passWord = passwordEncoder.encode(password);
//    }
//
//    public boolean checkPassword(String password) {
//        return passwordEncoder.matches(password, this.passWord);
//    }
//
//}
