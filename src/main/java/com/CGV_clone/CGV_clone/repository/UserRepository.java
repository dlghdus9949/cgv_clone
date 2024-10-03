package com.CGV_clone.CGV_clone.repository;

import com.CGV_clone.CGV_clone.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // 기본 CRUD 메서드는 JpaRepository가 제공

    // 이 인터페이스 자체로 CRUD의 모든 기능은 제공한다.

    // List<User> findByUserId(String userId);
    Optional<User> findByUserId(String userId);

    // userId로 사용자 삭제
    void deleteByUserId(String userId);




}

