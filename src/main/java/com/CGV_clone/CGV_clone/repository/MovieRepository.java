package com.CGV_clone.CGV_clone.repository;

import com.CGV_clone.CGV_clone.domain.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
}
