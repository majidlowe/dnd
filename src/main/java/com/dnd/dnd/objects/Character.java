package com.dnd.dnd.objects;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="characters")
@Getter
@Setter
public class Character {

  @Id
  private long id;
  private String name;
  private String race;
  private Integer hitPoints;



}
