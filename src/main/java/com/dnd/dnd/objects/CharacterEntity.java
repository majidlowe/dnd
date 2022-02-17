package com.dnd.dnd.objects;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="characters")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CharacterEntity {

  @Id
  private long id;
  private String name;
  private String race;
  private Integer hitPoints;



}
