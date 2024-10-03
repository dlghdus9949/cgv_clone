package com.CGV_clone.CGV_clone.controller;

import com.CGV_clone.CGV_clone.DTO.UserDto;
import com.CGV_clone.CGV_clone.DTO.UserupdateDto;
import com.CGV_clone.CGV_clone.domain.User;
import com.CGV_clone.CGV_clone.service.UserService;
import com.CGV_clone.CGV_clone.util.JwtUtil;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/users")
@Controller
public class UserController {


    private final UserService userService;
    private final JwtUtil jwtUtil;

    public UserController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    // 로그인 api
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        // 사용자 검증 (이메일과 비밀번호 체크)
        User user = userService.validateUser(loginRequest.getUserId(), loginRequest.getPassword());

        // 로그인 성공 시 JWT 토큰 발급
        String token = jwtUtil.generateToken(user.getUserId());

        // JWT 토큰을 클라이언트에 반환
        return ResponseEntity.ok(new AuthResponse(token));
    }

    // JWT 토큰을 반환하기 위한 응답 클래스
    static class AuthResponse {
        private String token;

        public AuthResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }

    // 회원가입 api

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable String userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok("User deleted successfully");
    }

//    @Autowired
//    private UserService userService;

    @GetMapping("/{userId}") // 사용자 조회
    public ResponseEntity<UserDto> getUserById(@PathVariable String userId) {
        UserDto userDto = userService.findUserByUserId(userId);
        return ResponseEntity.ok(userDto);
    }

    @PutMapping("/{userId}") // 사용자 정보 수정
    public ResponseEntity<String> updateUser(@PathVariable String userId, @RequestBody UserupdateDto userupdatedto) {
        userService.updateUser(userId, userupdatedto);  // UserService에서 업데이트 로직 수행
        return ResponseEntity.ok("User updated successfully");
    }


}
