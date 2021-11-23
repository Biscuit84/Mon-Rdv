package sopra.formation.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Consultation;
import sopra.formation.model.Creneau;
import sopra.formation.model.Patient;
import sopra.formation.model.Praticien;



public interface ICreneauRepository extends JpaRepository<Creneau, Long> {
	
	@Query("select c.duree from Creneau c where c.praticien.id = :idPraticien")
	Creneau findDureeCreneauByPraticien(@Param("idPraticien") Praticien praticien);

}
