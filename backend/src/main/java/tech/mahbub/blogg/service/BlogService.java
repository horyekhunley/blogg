package tech.mahbub.blogg.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.mahbub.blogg.model.Blog;
import tech.mahbub.blogg.repository.BlogRepository;

import java.util.List;

@Service
@Slf4j
public class BlogService implements IBlogService{

    @Autowired
    private BlogRepository blogRepository;

    @Override
    public Blog create(Blog blog) {
        return blogRepository.save(blog);
    }

    @Override
    public List <Blog> findByTitle(String title) {
        return blogRepository.findByTitle(title);
    }

    @Override
    public List<Blog> findAll() {
        return blogRepository.findAll();
    }

    @Override
    public void delete(String id) {
        blogRepository.deleteById(id);
    }

    @Override
    public Blog update(Blog blog) {
        return blogRepository.save(blog);
    }

    @Override
    public Blog findById(String id) {
        return blogRepository.findById(id).get();
    }
}
