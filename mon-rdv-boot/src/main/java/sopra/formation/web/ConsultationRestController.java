package sopra.formation.web;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Consultation;
import sopra.formation.model.View;
import sopra.formation.repository.IConsultationRepository;
import sopra.formation.repository.IPatientRepository;
import sopra.formation.repository.IPraticienRepository;

@RestController
@RequestMapping("/consultation")
@CrossOrigin("*")
public class ConsultationRestController {

	@Autowired
	private IConsultationRepository consultationRepo;
	@Autowired
	private IPatientRepository patientRepo;
	@Autowired
	private IPraticienRepository praticienRepo;
	
	@GetMapping("")
	@JsonView(View.ViewConsultation.class)
	public List<Consultation> findAll() {
		List<Consultation> consultations = consultationRepo.findAll();

		return consultations;
	}

	@GetMapping("{id}")
	@JsonView(View.ViewConsultation.class)
	public Consultation find(@PathVariable Long id) {
		Optional<Consultation> optConsultation = consultationRepo.findById(id);

		if (optConsultation.isPresent()) {
			return optConsultation.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Consultation non trouvé");
		}
	}


	@PostMapping("")
	@JsonView(View.ViewConsultation.class)
	public Consultation create(@RequestBody Consultation consultation) {
		consultation = consultationRepo.save(consultation);

		return consultation;
	}

	@PutMapping("/{id}")
	@JsonView(View.ViewConsultation.class)
	public Consultation update(@PathVariable Long id, @RequestBody Consultation consultation) {
		if (!consultationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Consultation non trouvé");
		}

		consultation = consultationRepo.save(consultation);

		return consultation;
	}

	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!consultationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Consultation non trouvé");
		}
		
		consultationRepo.deleteById(id);
	}
	
	public List<Consultation> findConsultationByPatientWithDateFutur(@PathVariable Long id) {
		List<Consultation> consultations = consultationRepo.findConsultationByPatientWithDateFutur( patientRepo.findById(id).get(), LocalDateTime.now());

		return consultations;
	}
	public List<Consultation> findConsultationByPatientWithDatePast(@PathVariable Long id) {
		List<Consultation> consultations = consultationRepo.findConsultationByPatientWithDateFutur( patientRepo.findById(id).get(), LocalDateTime.now());

		return consultations;
	}
	
	public List<Consultation> findConsultationByPraticienWithDateFutur(@PathVariable Long id) {
		List<Consultation> consultations = consultationRepo.findConsultationByPraticienWithDateFutur( praticienRepo.findById(id).get(), LocalDateTime.now());

		return consultations;}
	
	public List<Consultation> findConsultationByPraticienWithDatePast(@PathVariable Long id) {
		List<Consultation> consultations = consultationRepo.findConsultationByPraticienWithDatePast( praticienRepo.findById(id).get(), LocalDateTime.now());

		return consultations;}

}
