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

import sopra.formation.model.Patient;
import sopra.formation.model.View;
import sopra.formation.repository.IPatientRepository;

@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientRestController {
	@Autowired
	private IPatientRepository patientRepo;

	@GetMapping("")
	@JsonView(View.ViewPatient.class)
	public List<Patient> findAll() {
		List<Patient> patients = patientRepo.findAll();

		return patients;
	}

	@GetMapping("{id}")
	@JsonView(View.ViewPatient.class)
	public Patient find(@PathVariable Long id) {
		Optional<Patient> optPatient = patientRepo.findById(id);

		if (optPatient.isPresent()) {
			return optPatient.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Patient non trouvé");
		}
	}
	
	@PostMapping("")
	@JsonView(View.ViewPatient.class)
	public Patient create( @RequestBody Patient patient) {
		
		
		patient = patientRepo.save(patient);

		return patient;
	}

	@PutMapping("/{id}")
	@JsonView(View.ViewPatient.class)
	public Patient update(@PathVariable Long id, @RequestBody Patient patient) {
		if (!patientRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Patient non trouvé");
		}

		patient = patientRepo.save(patient);

		return patient;
	}
	
	@DeleteMapping("/{id}")
	@JsonView(View.ViewPatient.class)
	public void delete(@PathVariable Long id) {
		if (!patientRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Patient non trouvé");
		}
		
		patientRepo.deleteById(id);
	}

}
