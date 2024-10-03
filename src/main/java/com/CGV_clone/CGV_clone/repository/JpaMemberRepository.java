//package com.CGV_clone.CGV_clone.repository;
//
//import com.CGV_clone.CGV_clone.domain.Member;
//import jakarta.persistence.EntityManager;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//import java.util.Optional;
//
//@RequiredArgsConstructor
//@Repository
//public class JpaMemberRepository implements MemberRepository {
//
//    private final EntityManager em;
//
//    @Override
//    public Member save(Member member) {
//        em.persist(member);
//        return member;
//    }
//
//    @Override
//    public Optional<Member> findByUserId(String userId) {
//        return Optional.empty();
//    }
//
//    @Override
//    public Optional<Member> findById(Long id) {
//        return em.find(Member.class, id);
//    }
//
//    @Override
//    public Optional<Member> findByName(String name) {
//        return em.find(Member.class, name);
//    }
//
//    @Override
//    public List<Member> findAll() {
//        return List.of();
//    }
//
//    @Override
//    public Optional<Member> findByEmail(String email) {
//        return Optional.empty();
//    }
//
//
//}
