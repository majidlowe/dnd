package com.dnd.dnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterRepo extends JpaRepository<Character, Long> {
}