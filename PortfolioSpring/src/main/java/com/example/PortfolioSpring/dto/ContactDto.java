package com.example.PortfolioSpring.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
public class ContactDto {



    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ContactoDto {

        @NotBlank(message = "Nombre y apellido obligatorio")
        private String nombreAppellido;

        @NotBlank(message = "Email obligatorio")
        @Email(message = "Email obligatorio")
        private String email;

        @NotBlank(message = "Numero obligatorio")
        private String numero;

        @NotBlank(message = "Descripcion obligatoria")
        private String descripcion;
    }
}
