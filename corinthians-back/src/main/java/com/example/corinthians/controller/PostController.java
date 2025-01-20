package com.example.corinthians.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.corinthians.post.Post;
import com.example.corinthians.post.PostRepository;
import com.example.corinthians.post.PostRequestDTO;
import com.example.corinthians.post.PostResponseDTO;

@RestController
@RequestMapping("post")
public class PostController {

    @Autowired
    private PostRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void savePost(@RequestBody PostRequestDTO data) {
        Post postData = new Post(data);
        repository.save(postData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<PostResponseDTO> getAll() {

        // ORDER BY WITH SORT
        // List<PostResponseDTO> postList = repository.findAll(Sort.by(Sort.Direction.DESC, "content")).stream().map(PostResponseDTO::new).toList();

        List<PostResponseDTO> postList = repository.findAll().stream().map(PostResponseDTO::new).toList();
        return postList;
    }
}
