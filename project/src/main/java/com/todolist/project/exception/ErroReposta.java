package com.todolist.project.exception;


import lombok.Getter;
import lombok.Setter;

@Getter@Setter
public class ErroReposta {

    private String mensagem;
    private int codigoHttp;

    public ErroReposta(String mensagem, int codigoHttp) {
        this.mensagem = mensagem;
        this.codigoHttp = codigoHttp;
    }

}
