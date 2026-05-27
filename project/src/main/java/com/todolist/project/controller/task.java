package com.todolist.project.controller;


import com.todolist.project.model.Task;
import com.todolist.project.service.ServiceTask;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/task")
@RequiredArgsConstructor
public class task {

    private final ServiceTask service;


    @PostMapping
    public Task salvar(@RequestBody Task task) {
        return service.salvar(task);
    }

    @GetMapping
    public List<Task> lista(){
       return service.listaTask();
    }

    @DeleteMapping("{id}")
    public void remover(@PathVariable Integer id) {
        service.remover(id);
    }

    @PutMapping("{id}")
    public void atualizar(@PathVariable(name = "id") Integer id, @RequestBody Task task) {
        service.atualizar(id,task);
    }


}
