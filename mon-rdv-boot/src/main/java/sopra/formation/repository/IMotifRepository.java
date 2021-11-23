package sopra.formation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Motif;

public interface IMotifRepository extends JpaRepository<Motif, Long> {

	@Query("select m from Motif m join Specialite s where s.praticien.id = :id")
	List<Motif> findAllByPraticienId(@Param("id") Long id);
		@Query("select m from Motif m where m.specialite.id = :idSpecialite")
	List<Motif> findBySpecialite(@Param("idSpecialite") Long idSpecialite);
	
}
