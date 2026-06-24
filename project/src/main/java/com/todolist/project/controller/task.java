package com.todolist.project.controller;


import com.todolist.project.exception.CampoObrigatorioException;
import com.todolist.project.model.Task;
import com.todolist.project.service.ServiceTask;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/task")
@RequiredArgsConstructor
public class task {

    private final ServiceTask service;


    @PostMapping
    public ResponseEntity<Task> salvar(@RequestBody Task task) {
        if (task.getTitulo() == null) {
            throw new CampoObrigatorioException("Titulo");


        }else if (task.getDescricao() == null) {
            throw new CampoObrigatorioException("Descricao");

        }else if(task.getResponsavel() == null) {
            throw new CampoObrigatorioException("Responsavel");
        }
        Task taskCreate = service.salvar(task);

        return ResponseEntity.status(HttpStatus.CREATED).body(taskCreate);
    }

    @GetMapping
    public List<Task> lista(){
       return service.listaTask();
    }

    @DeleteMapping("{id}")
    public void remover(@PathVariable Integer id) {
        if(id == null) {
            throw new CampoObrigatorioException("ID");
        }
        service.remover(id);
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void atualizar(@PathVariable(name = "id") Integer id, @RequestBody Task task) {


        if (task.getTitulo() == null) {
            throw new CampoObrigatorioException("Titulo");


        }else if (task.getDescricao() == null) {
            throw new CampoObrigatorioException("Descricao");

        }else if(task.getResponsavel() == null) {
            throw new CampoObrigatorioException("Responsavel");
        }

        service.atualizar(id,task);

    }


}
