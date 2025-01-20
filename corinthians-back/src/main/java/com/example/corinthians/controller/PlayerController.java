package com.example.corinthians.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.corinthians.player.Player;
import com.example.corinthians.player.PlayerRepository;
import com.example.corinthians.player.PlayerRequestDTO;
import com.example.corinthians.player.PlayerResponseDTO;

@RestController
@RequestMapping("player")
public class PlayerController {

    @Autowired
    private PlayerRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void savePlayer(@RequestBody PlayerRequestDTO data) {
        Player playerData = new Player(data);
        repository.save(playerData);
        return;
    }

    /* GET ALL */
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping /* Toda vez que bater no ENDPOINT utilizando o met. GET, inicia essa funcao */
    public List<PlayerResponseDTO> getAll() {

        List<PlayerResponseDTO> playerList = repository.findAll().stream().map(PlayerResponseDTO::new).toList();
        return playerList;
    }
}
