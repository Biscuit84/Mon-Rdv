package sopra.formation.web;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
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

import sopra.formation.model.Specialite;
import sopra.formation.repository.ISpecialiteRepository;

@RestController
@RequestMapping("/specialite")
@CrossOrigin("*")
public class SpecialiteRestController {

	@Autowired
	private ISpecialiteRepository specialiteRepo;

	@GetMapping("")
	@JsonView(View.ViewSpecialite.class)
	public List<Specialite> findAll() {
		List<Specialite> specialites = specialiteRepo.findAll();

		return specialites;
	}

	@GetMapping("{id}")
	@JsonView(View.ViewSpecialiteDetail.class)
	public Specialite find(@PathVariable Long id) {
		Optional<Specialite> optSpecialite = specialiteRepo.findById(id);

		if (optSpecialite.isPresent()) {
			return optSpecialite.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Specialite non trouvé");
		}
	}

	@PostMapping("")
	@JsonView(View.ViewSpecialite.class)
	public Specialite create(@RequestBody Specialite specialite, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Specialite invalide !");
		}

		specialite = specialiteRepo.save(specialite);

		return specialite;
	}

	@PutMapping("/{id}")
	@JsonView(View.ViewSpecialite.class)
	public Specialite update(@PathVariable Long id, @RequestBody Specialite specialite) {
		if (!specialiteRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Specialite non trouvé");
		}

		specialite = specialiteRepo.save(specialite);

		return specialite;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!specialiteRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Specialite non trouvé");
		}

		specialiteRepo.deleteById(id);
	}
	
}
