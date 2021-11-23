package sopra.formation.web;

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

@RestController
@RequestMapping("/consultation")
@CrossOrigin("*")
public class ConsultationRestController {

	@Autowired
	private IConsultationRepository consultationationRepo;
	
	@GetMapping("")
	@JsonView(View.ViewConsultation.class)
	public List<Consultation> findAll() {
		List<Consultation> consultations = consultationationRepo.findAll();

		return consultations;
	}

	@GetMapping("{id}")
	@JsonView(View.ViewConsultation.class)
	public Consultation find(@PathVariable Long id) {
		Optional<Consultation> optConsultation = consultationationRepo.findById(id);

		if (optConsultation.isPresent()) {
			return optConsultation.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Evaluation non trouvé");
		}
	}


	@PostMapping("")
	@JsonView(View.ViewConsultation.class)
	public Consultation create(@RequestBody Consultation consultation) {
		consultation = consultationationRepo.save(consultation);

		return consultation;
	}

	@PutMapping("/{id}")
	@JsonView(View.ViewConsultation.class)
	public Consultation update(@PathVariable Long id, @RequestBody Consultation consultation) {
		if (!consultationationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Evaluation non trouvé");
		}

		consultation = consultationationRepo.save(consultation);

		return consultation;
	}

	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!consultationationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Evaluation non trouvé");
		}
		
		consultationationRepo.deleteById(id);
	}
}
