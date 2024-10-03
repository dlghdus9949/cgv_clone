//package com.CGV_clone.CGV_clone.repository;
//
//import com.CGV_clone.CGV_clone.domain.Member;
//
//import java.util.List;
//import java.util.Optional;
//
//public interface MemberRepository {
//    Member save (Member member); // 저장
//    Optional<Member> findByUserId(String userId); // Optional은 값이 있을수도 있고 없을 수도 있는 상황에 쓰임
//    Optional<Member> findById(Long id); // id로 멤버 찾기
//    Optional<Member> findByName(String name); // 이름으로 멤버 찾기
//    List<Member> findAll(); // 모든 멤버 list하여 만들기
//    Optional<Member> findByEmail(String email);
//}
