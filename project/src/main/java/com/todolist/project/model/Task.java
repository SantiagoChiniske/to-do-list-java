package com.todolist.project.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "task")
@Setter @Getter
public class Task {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column
    String titulo;

    @Column
    String descricao;

    @Column
    String responsavel;

}
