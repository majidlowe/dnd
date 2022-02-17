package com.dnd.dnd.domain;

import com.dnd.dnd.objects.CharacterEntity;
import com.dnd.dnd.repository.CharacterRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {
  CharacterRepo characterRepo;

  public CharacterService(CharacterRepo characterRepo) {
    this.characterRepo = characterRepo;
  }

  public List<CharacterEntity> getAllCharacters(){
    return characterRepo.findAll();
  }
}
