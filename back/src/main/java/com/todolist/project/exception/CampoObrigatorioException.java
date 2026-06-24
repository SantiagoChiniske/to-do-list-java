package com.todolist.project.exception;

public class CampoObrigatorioException extends RuntimeException {
    public CampoObrigatorioException(String campo) {
        super("O campo " + campo + " é obrigatório e não foi informado");
    }
}
