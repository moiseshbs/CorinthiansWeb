package com.example.corinthians.post;

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
@EqualsAndHashCode(of = "idPost")
@Table(name = "post")
@Entity(name = "post")

public class Post {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPost;
    private String content; 

    public Post(PostRequestDTO data) {
        this.content = data.content();
    }
}
