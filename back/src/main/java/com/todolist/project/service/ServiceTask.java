package com.todolist.project.service;

import com.todolist.project.model.Task;
import com.todolist.project.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServiceTask {

    private final TaskRepository repository;


    public Task salvar(Task task) {
        return repository.save(task);
    }


    public List<Task> listaTask(){
        return repository.findAll();
    }

    public void remover(Integer id) {
        repository.findById(id).ifPresent(task -> {
            repository.delete(task);
        });

    }

    public void atualizar(Integer id,Task task) {

        task.setId(id);
        repository.save(task);

    }
}
