package com.example.corinthians.post;

public record PostResponseDTO(Long idPost, String content) {
    public PostResponseDTO(Post post) {
        this(post.getIdPost(), post.getContent());
    }
}
