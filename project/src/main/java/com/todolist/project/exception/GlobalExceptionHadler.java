package com.todolist.project.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@RestControllerAdvice
public class GlobalExceptionHadler {


    @ExceptionHandler(CampoObrigatorioException.class)
    public ResponseEntity<ErroReposta> tratamentoCampoObrigatorio(CampoObrigatorioException ex) {

        ErroReposta erro = new ErroReposta(ex.getMessage(), HttpStatus.BAD_REQUEST.value());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(erro);
    }


    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErroReposta> tratarErroTipoParametro(MethodArgumentTypeMismatchException ex) {

        String mensagem = String.format("O parametro '%s' deve ser do tipo numerico", ex.getName());

        ErroReposta erro = new ErroReposta(mensagem, HttpStatus.BAD_REQUEST.value());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(erro);
    }



}
