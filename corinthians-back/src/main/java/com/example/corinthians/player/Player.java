package com.example.corinthians.player;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "idPlayer")
@Table(name = "player") /* Informando o nome da tabela que vai acessar */
@Entity(name = "player")

public class Player {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPlayer;
    private String name;
    private String number;
    private String position;
    private String birthplace;
    private String dateBirth;
    private Double weight;
    private Double height;
    private String image;

    public Player(PlayerRequestDTO data) {
        this.name = data.name();
        this.number = data.number();
        this.position = data.position();
        this.birthplace = data.birthplace();
        this.dateBirth = data.dateBirth();
        this.weight = data.weight();
        this.height = data.height();
        this.image = data.image();
    }

}
