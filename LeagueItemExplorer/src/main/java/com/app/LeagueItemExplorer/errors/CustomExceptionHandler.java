package com.app.LeagueItemExplorer.errors;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(value = ErrorNotFound.class)
    public ResponseEntity handleChampionNotFound(ErrorNotFound errorNotFound) {
        return new ResponseEntity<>(errorNotFound.getMessage(),HttpStatusCode.valueOf(404));
    }

    @ExceptionHandler(value = ErrorResponse.class)
    public ResponseEntity HttpClientError(ErrorResponse errorResponse) {
        return new ResponseEntity<>(errorResponse.getMessage(),HttpStatusCode.valueOf(404));
    }
}
