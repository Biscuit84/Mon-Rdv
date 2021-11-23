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

import sopra.formation.model.Creneau;
import sopra.formation.model.View;
import sopra.formation.repository.ICreneauRepository;
import sopra.formation.repository.IPraticienRepository;



@RestController
@RequestMapping("/creneau")
@CrossOrigin("*")
public class CreneauRestController {
	
	@Autowired
	private ICreneauRepository creneauRepo;
	@Autowired
	private IPraticienRepository praticienRepo;

	@GetMapping("")
	@JsonView(View.ViewCreneau.class)
	public List<Creneau> findAll() {
		List<Creneau> creneaux = creneauRepo.findAll();

		return creneaux;
	}
	
	@GetMapping("{id}")
	@JsonView(View.ViewCreneau.class)
	public Creneau find(@PathVariable Long id) {
		Optional<Creneau> optCreneau = creneauRepo.findById(id);

		if (optCreneau.isPresent()) {
			return optCreneau.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Creneau non trouvé");
		}
	}


	@PostMapping("")
	@JsonView(View.ViewCreneau.class)
	public Creneau create(@RequestBody Creneau creneau) {
		creneau = creneauRepo.save(creneau);

		return creneau;
	}

	@PutMapping("/{id}")
	@JsonView(View.ViewCreneau.class)
	public Creneau update(@PathVariable Long id, @RequestBody Creneau creneau) {
		if (!creneauRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Creneau non trouvé");
		}

		creneau = creneauRepo.save(creneau);

		return creneau;
	}


	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!creneauRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Creneau non trouvé");
		}
		
		creneauRepo.deleteById(id);
	}
	
	@GetMapping("{id}/Duree")
	@JsonView(View.ViewCreneau.class)
	public Integer findDureeCreneauByPraticien(@PathVariable Long id) {
		Creneau optCreneau = creneauRepo.findDureeCreneauByPraticien(praticienRepo.findById(id).get());

		
			return optCreneau.getDuree();
		
	}
}
