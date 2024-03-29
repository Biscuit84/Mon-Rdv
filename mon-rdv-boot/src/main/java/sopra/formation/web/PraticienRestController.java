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

import sopra.formation.model.Praticien;
import sopra.formation.model.View;
import sopra.formation.repository.IPraticienRepository;

@RestController
@RequestMapping("/praticien")
@CrossOrigin("*")
public class PraticienRestController {
	@Autowired
	private IPraticienRepository praticienRepo;

	@GetMapping("")
	@JsonView(View.ViewPraticien.class)
	public List<Praticien> findAll() {
		List<Praticien> praticiens = praticienRepo.findAll();

		return praticiens;
	}

	@GetMapping("{id}")
	@JsonView(View.ViewPraticien.class)
	public Praticien find(@PathVariable Long id) {
		Optional<Praticien> optPraticien = praticienRepo.findById(id);

		if (optPraticien.isPresent()) {
			return optPraticien.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Praticien non trouvé");
		}
	}
	
	@GetMapping("{id}/specialites")
	@JsonView(View.ViewPraticienWithSpecialite.class)
	public Praticien findPraticienWithSpecialite(@PathVariable Long id) {
		Optional<Praticien> optPraticien = praticienRepo.findByIdWithSpecilite(id);
		
		if (optPraticien.isPresent()) {
			return optPraticien.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Praticien non trouvé");
		}
	}

	@PostMapping("")
	@JsonView(View.ViewPraticien.class)
	public Praticien create( @RequestBody Praticien praticien) {
		
		
		praticien = praticienRepo.save(praticien);

		return praticien;
	}

	@PutMapping("/{id}")
	@JsonView(View.ViewPraticien.class)
	public Praticien update(@PathVariable Long id, @RequestBody Praticien praticien) {
		if (!praticienRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Praticien non trouvé");
		}

		praticien = praticienRepo.save(praticien);

		return praticien;
	}
	
	@DeleteMapping("/{id}")
	@JsonView(View.ViewPraticien.class)
	public void delete(@PathVariable Long id) {
		if (!praticienRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Praticien non trouvé");
		}
		
		praticienRepo.deleteById(id);
	}

}
