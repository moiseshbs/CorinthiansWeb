package com.example.corinthians.player;

public record PlayerResponseDTO(Long idPlayer, String name, String number, String position, String birthplace, String dateBirth, Double weight, Double height, String image) {
    public PlayerResponseDTO(Player player) {
        this(player.getIdPlayer(), player.getName(), player.getNumber(), player.getPosition(), player.getBirthplace(), player.getDateBirth(), player.getWeight(), player.getHeight(), player.getImage());
    }
}
