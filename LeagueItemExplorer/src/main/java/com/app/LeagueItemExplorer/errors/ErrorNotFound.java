package com.app.LeagueItemExplorer.errors;

import org.springframework.http.HttpStatusCode;

public class ErrorNotFound extends RuntimeException{
    private HttpStatusCode statusCode;
    private String message;

    public ErrorNotFound(HttpStatusCode statusCode, String message) {
        this.statusCode = statusCode;
        this.message = message;
    }

}

