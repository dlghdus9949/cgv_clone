package com.CGV_clone.CGV_clone.service;

import com.CGV_clone.CGV_clone.DTO.UserDto;
import com.CGV_clone.CGV_clone.DTO.UserupdateDto;
import com.CGV_clone.CGV_clone.domain.Gender;
import com.CGV_clone.CGV_clone.domain.User;
import com.CGV_clone.CGV_clone.repository.UserRepository;
import com.CGV_clone.CGV_clone.util.JwtUtil;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public UserService(UserRepository usersRepository, BCryptPasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    // 회원 탈퇴 처리
    @Transactional
    public void deleteUser(String userId) {
        userRepository.deleteByUserId(userId);
    }

    // 회원가입 처리 메서드
    @Transactional
    public void registerUser(User user) {
        // 비밀번호 암호화
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);  // 암호화된 비밀번호 설정
        userRepository.save(user);  // DB에 저장
    }

    // 로그인 처리
    public String login(String userId, String password) {
        Optional<User> optionalUser = userRepository.findByUserId(userId);

        // 사용자가 존재하지 않는 경우 예외 처리
        User user = optionalUser.orElseThrow(() -> new IllegalArgumentException("Invalid userId or password"));

        // 비밀번호가 일치하는지 확인
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IllegalArgumentException("Invalid userId or password");
        }

        // 토큰 발급
        return jwtUtil.generateToken(userId);
    }

    // 사용자 검증
    public User validateUser(String userId, String password) {
        Optional<User> optionalUser = userRepository.findByUserId(userId);

        // 사용자가 존재하지 않는 경우 예외 처리
        User user = optionalUser.orElseThrow(() -> new IllegalArgumentException("Invalid userId or password"));

        // 비밀번호가 일치하는지 확인
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        return user;
    }

    // 사용자 아이디로 사용자 정보 조회
    public UserDto findUserByUserId(String userId) {
        return userRepository.findByUserId(userId)
                .map(user -> new UserDto(
                        user.getUsername(), // user 객체에서 필드 값을 가져와야 합니다
                        user.getEmail(),
                        user.getPhone_number(),
                        user.getBirth_date(),
                        user.getGender().toString()  // Enum 값을 문자열로 변환
                ))
                .orElseThrow(() -> new IllegalArgumentException("User with ID " + userId + " not found"));
    }

    @Transactional
    public void updateUser(String userId, UserupdateDto userupdatedto) {
        // Optional에서 값을 가져옴
        Optional<User> optionalUser = userRepository.findByUserId(userId);

        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();  // 값을 가져옴

            // 수정할 필드를 설정
            existingUser.setUsername(userupdatedto.getUserName());
            existingUser.setEmail(userupdatedto.getEmail());
            existingUser.setPassword(passwordEncoder.encode(userupdatedto.getPassword()));
            existingUser.setBirth_date(userupdatedto.getBirthDate());
            // String을 Enum 타입으로 변환
            Gender genderEnum = Gender.valueOf(userupdatedto.getGender().toUpperCase()); // String -> Enum 변환
            existingUser.setGender(genderEnum);

            // 저장소에 사용자 정보 업데이트
            userRepository.save(existingUser);
        } else {
            throw new RuntimeException("User not found");
        }
    }
}


