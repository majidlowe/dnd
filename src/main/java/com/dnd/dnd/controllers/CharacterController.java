package com.dnd.dnd.controllers;

import com.dnd.dnd.domain.CharacterService;
import com.dnd.dnd.objects.CharacterEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/character")
public class CharacterController {
  CharacterService characterService;

  public CharacterController(CharacterService characterService) {
    this.characterService = characterService;
  }

  @GetMapping()
  public Iterable<CharacterEntity> getCharacterList() {
    return characterService.getAllCharacters();
  }


}
