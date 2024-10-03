//package com.CGV_clone.CGV_clone.service;
//
//import com.CGV_clone.CGV_clone.domain.Member;
//import com.CGV_clone.CGV_clone.repository.MemberRepository;
//import com.CGV_clone.CGV_clone.repository.JpaMemberRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
////import static com.CGV_clone.CGV_clone.domain.Member.passwordEncoder;
//
//@Service
//public class MemberService {
//
//    private final PasswordEncoder passwordEncoder;
//
//    @Autowired
//    public MemberService(PasswordEncoder passwordEncoder) {
//        this.passwordEncoder = passwordEncoder;
//    }
//    private final JpaMemberRepository memoryMemberRepository;
//
//    public MemberService(JpaMemberRepository memoryMemberRepository) {
//        this.memoryMemberRepository = memoryMemberRepository;
//    }
//
//    public boolean registerMember(Member member) {
//        // 이메일 중복 체크
//        if (MemberRepository.findByEmail(member.getEmail().isPresent())){
//            throw new IllegalArgumentException(("Email already exist"));
//
//        }
//        member.setPassword(passwordEncoder.encode(member.getPassWord()));
//        JpaMemberRepository.save(member);
//        return true;
//    }
//
//    public Optional<Member> login(String userId, String rawPassword) {
//        Optional<Member> member = memoryMemberRepository.findByUserId(userId);
//        // 비밀번호 검증
//        if (member.isPresent() && passwordEncoder.matches(rawPassword, member.get().getPassWord())) {
//            return member;
//        }
//        return Optional.empty();
//    }
//
//
//
//}
