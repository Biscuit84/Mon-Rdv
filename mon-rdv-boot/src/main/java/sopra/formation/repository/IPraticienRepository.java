package sopra.formation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Praticien;

public interface IPraticienRepository extends JpaRepository<Praticien, Long> {

	@Query("select distinct p from Praticien p left join fetch p.lieux l where p.id = :id")
	Optional<Praticien> findByIdWithLieux(@Param("id") Long id);
}
