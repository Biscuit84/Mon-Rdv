package sopra.formation.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Consultation;
import sopra.formation.model.Patient;
import sopra.formation.model.Praticien;


public interface IConsultationRepository extends JpaRepository<Consultation, Long> {
//	@Query("select e.comportemental, e.technique, e.commentaires from Stagiaire s join s.evaluation e where s = :stag")
//	Object[] findEvaluationRawByStagiaire(@Param("stag") Stagiaire stagiaire); // Par Annotation @Query

	@Query("select c from Consultation c join c.creneaux cr where c.patient.id = :idPatient and cr.debut> :now")
	List<Consultation> findConsultationByPatientWithDateFutur(@Param("idPatient") Patient patient, @Param("now") LocalDateTime date);
	@Query("select c from Consultation c left join c.creneaux cr where c.patient.id = :idPatient")
	List<Consultation> findConsultationByPatientWithDatePast(@Param("idPatient") Long idPatient);
	@Query("select c from Consultation c left join c.creneaux cr where cr.praticien.id = :idPraticien and cr.debut> :now")
	List<Consultation> findConsultationByPraticienWithDateFutur(@Param("idPraticien") Praticien praticien, @Param("now") LocalDateTime date);
	@Query("select c from Consultation c join c.creneaux cr where cr.praticien.id = :idPraticien and cr.debut< :now")
	List<Consultation> findConsultationByPraticienWithDatePast(@Param("idPraticien") Praticien praticien, @Param("now") LocalDateTime date);
}
