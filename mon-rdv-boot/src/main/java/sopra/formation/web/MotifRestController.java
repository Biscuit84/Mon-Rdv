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

import sopra.formation.model.Motif;
import sopra.formation.model.View;
import sopra.formation.repository.IMotifRepository;

@RestController
@RequestMapping("/motif")
@CrossOrigin("*")
public class MotifRestController {

	@Autowired
	private IMotifRepository motifRepo;

	@GetMapping("")
	@JsonView(View.ViewMotif.class)
	public List<Motif> findAll() {
		List<Motif> motifs = motifRepo.findAll();

		return motifs;
	}

	@GetMapping("{id}")
	@JsonView(View.ViewMotif.class)
	public Motif find(@PathVariable Long id) {
		Optional<Motif> optMotif = motifRepo.findById(id);

		if (optMotif.isPresent()) {
			return optMotif.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Motif non trouvé");
		}
	}

	@GetMapping("{id}")
	@JsonView(View.ViewMotif.class)
	public List<Motif> findAllByPraticienId(@PathVariable Long id) {
		List<Motif> motifs = motifRepo.findAllByPraticienId(id);

		return motifs ;
	}
	
	@PostMapping("")
	@JsonView(View.ViewMotif.class)
	public Motif create(@RequestBody Motif motif, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Motif invalide !");
		}

		motif = motifRepo.save(motif);

		return motif;
	}

	@PutMapping("/{id}")
	@JsonView(View.ViewMotif.class)
	public Motif update(@PathVariable Long id, @RequestBody Motif motif) {
		if (!motifRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Motif non trouvé");
		}

		motif = motifRepo.save(motif);

		return motif;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!motifRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Motif non trouvé");
		}

		motifRepo.deleteById(id);
	}

}


