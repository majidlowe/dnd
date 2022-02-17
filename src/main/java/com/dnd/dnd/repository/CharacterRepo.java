package com.dnd.dnd.repository;

import com.dnd.dnd.objects.CharacterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterRepo extends JpaRepository<CharacterEntity, Long> {
}