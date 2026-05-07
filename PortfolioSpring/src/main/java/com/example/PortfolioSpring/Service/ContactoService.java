package com.example.PortfolioSpring.Service;


import com.example.PortfolioSpring.dto.ContactDto;
import org.springframework.beans.factory.annotation.Value;



import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactoService {


    private final JavaMailSender javaMailSender;

    @Value("${mail.destinatario}")
    private String destinatario;


    public void enviarMail(ContactDto.ContactoDto contactDto){


        SimpleMailMessage mailMessage = new SimpleMailMessage();


        mailMessage.setTo(this.destinatario);


        mailMessage.setSubject("Nuevo contacto");


        String cuerpo = "Nombre y Apellido " + contactDto.getNombreAppellido() + "\n" +
                "Email " + contactDto.getEmail() + "\n" +
                "Numero " + contactDto.getNumero() + "\n" +
                "Descripcion " + contactDto.getDescripcion();

        mailMessage.setText(cuerpo);


        javaMailSender.send(mailMessage);
    }

}
