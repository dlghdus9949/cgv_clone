package com.CGV_clone.CGV_clone.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private String secret = "yoursecretKeylasjdlfkjwlfkjlskjflkadlkfalkf";

    // 토큰 생성
    public String generateToken(String userId) {
        return Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))  // 10시간 유효
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    // 토큰에서 정보 추출
    public Claims extractClaims(String token) {
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();
    }

    // 토큰에서 사용자 이름 추출
    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    // 토큰 만료 여부 확인
    public Boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }

    // 토큰 유효성 확인
    public Boolean validateToken(String token, String userId) {
        final String extractedUsername = extractUsername(token);
        return (extractedUsername.equals(userId) && !isTokenExpired(token));
    }
}
