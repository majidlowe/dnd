package com.dnd.dnd;

import com.dnd.dnd.domain.CharacterService;
import com.dnd.dnd.objects.CharacterEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class CharacterControllerTest {

  @Autowired
  MockMvc mvc;
  @Autowired
  @MockBean
  CharacterService characterService;

  @Test
  public void getCharacterList_shouldReturn_allCharacters ()throws Exception{
    CharacterEntity testCharacterOne = new CharacterEntity(1,"Majid","human",25);
    CharacterEntity testCharacterTwo = new CharacterEntity(2,"Lowe","robot",12);

    List<CharacterEntity> characterEntityList = new ArrayList<>();
    characterEntityList.add(testCharacterOne);
    characterEntityList.add(testCharacterTwo);

    when(characterService.getAllCharacters()).thenReturn(characterEntityList);

  }
}
