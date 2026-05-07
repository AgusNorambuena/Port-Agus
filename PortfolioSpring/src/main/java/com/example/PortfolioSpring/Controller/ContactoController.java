package com.example.PortfolioSpring.Controller;

import com.example.PortfolioSpring.dto.ContactDto;
import com.example.PortfolioSpring.Service.ContactoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/contacto")
@RequiredArgsConstructor
public class ContactoController {

    private final ContactoService contactoService;

    @PostMapping("/enviado")
    public ResponseEntity<String> enviarContacto(@RequestBody ContactDto.ContactoDto contactoDto) {
        contactoService.enviarMail(contactoDto);
        return ResponseEntity.ok("Email enviado correctamente");
    }
}