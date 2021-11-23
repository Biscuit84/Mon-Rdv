package sopra.formation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Lieu;
import sopra.formation.model.Motif;

public interface ILieuRepository extends JpaRepository<Lieu, Long> {

/*	@Query("select l from Lieu l where l.medecin.id = :idMedecin")
	List<Motif> findByMedecin(@Param("idMedecin") Long idSpecialite); */
	
	
}
