package sopra.formation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Creneau;
import sopra.formation.model.Motif;



public interface ICreneauRepository extends JpaRepository<Creneau, Long> {

/*	@Query("select c from Creneau c where c.motif.id = :idMotif and c.dispo = true")
	List<Motif> findByMotif(@Param("idMotif") Long idMotif);*/
}
