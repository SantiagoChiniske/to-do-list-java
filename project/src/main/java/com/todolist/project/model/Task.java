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

    @Column(nullable = false)
    String titulo;

    @Column(nullable = false)
    String descricao;

    @Column(nullable = false)
    String responsavel;

}
