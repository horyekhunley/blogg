package tech.mahbub.blogg.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import tech.mahbub.blogg.model.Blog;

import java.util.List;

@Repository
public interface BlogRepository extends MongoRepository<Blog, String> {
    @Query("{'title':?0}")
    public List<Blog> findByTitle(String title);
}
