package com.CGV_clone.CGV_clone.service;

import com.CGV_clone.CGV_clone.domain.Movie;
import com.CGV_clone.CGV_clone.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    //영화 목록 조회
    public List<Movie> getPopularMovies() {
        return movieRepository.findAll(); // 기본적으로 모든 영화를 반환
    }

    // 영화 상세 정보 조회
    public Movie getMovieById(Long id) {
        Optional<Movie> movie = movieRepository.findById(id);
        return movie.orElse(null); // 영화가 없으면 null 반환
    }

    @Transactional
    // 영화 저장 (단일 저장)
    public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    // 영화 저장 (복수 배열 저장)
    @Transactional
    public List<Movie> saveMovies(List<Movie> movies) {
        return movieRepository.saveAll(movies);
    }

    @Transactional
    // 영화 삭제
    public void deleteMovie(Long id) {
        movieRepository.deleteById(id);
    }
}
