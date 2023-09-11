package com.app.LeagueItemExplorer.errors;

import org.springframework.http.HttpStatusCode;

public class ErrorResponse extends RuntimeException{
    private HttpStatusCode status;
    private String message;

    public ErrorResponse(HttpStatusCode status,String message) {
        this.status = status;
        this.message = message;
    }

    @Override
    public String toString() {
        return "ErrorResponse{" +
                "status=" + status +
                ", message='" + message + '\'' +
                '}';
    }
}
