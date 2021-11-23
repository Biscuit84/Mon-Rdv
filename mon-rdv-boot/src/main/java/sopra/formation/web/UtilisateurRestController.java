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

import sopra.formation.model.Utilisateur;
import sopra.formation.model.View;
import sopra.formation.repository.IUtilisateurRepository;

@RestController
@RequestMapping("/utilisateur")
@CrossOrigin("*")
public class UtilisateurRestController {

	@Autowired
	private IUtilisateurRepository utilisateurRepo;

	@GetMapping("")
	@JsonView(View.ViewUtilisateur.class)
	public List<Utilisateur> findAll() {
		List<Utilisateur> utilisateurs = utilisateurRepo.findAll();

		return utilisateurs;
	}

	@GetMapping("{id}")
	@JsonView(View.ViewUtilisateur.class)
	public Utilisateur find(@PathVariable Long id) {
		Optional<Utilisateur> optUtilisateur = utilisateurRepo.findById(id);

		if (optUtilisateur.isPresent()) {
			return optUtilisateur.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Utilisateur non trouvé");
		}
	}
	
	@GetMapping("{email}")
	@JsonView(View.ViewUtilisateurByEmail.class)
	public Utilisateur findByEmail(@PathVariable String email) {
		Optional<Utilisateur> optUtilisateur = utilisateurRepo.findUtilisateurByEmail(email);

		if (optUtilisateur.isPresent()) {
			return optUtilisateur.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Utilisateur non trouvé");
		}
	}
	
	@GetMapping("{motDePasse}")
	@JsonView(View.ViewUtilisateurByMotDePasse.class)
	public Utilisateur findByMotDePasse(@PathVariable String motDePasse) {
		Optional<Utilisateur> optUtilisateur = utilisateurRepo.findUtilisateurByMotDePasse(motDePasse);

		if (optUtilisateur.isPresent()) {
			return optUtilisateur.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Utilisateur non trouvé");
		}
	}

	@PostMapping("")
	@JsonView(View.ViewUtilisateur.class)
	public Utilisateur create(@RequestBody Utilisateur utilisateur, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Utilisateur invalide !");
		}

		utilisateur = utilisateurRepo.save(utilisateur);

		return utilisateur;
	}

	@PutMapping("/{id}")
	@JsonView(View.ViewUtilisateur.class)
	public Utilisateur update(@PathVariable Long id, @RequestBody Utilisateur utilisateur) {
		if (!utilisateurRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Utilisateur non trouvé");
		}

		utilisateur = utilisateurRepo.save(utilisateur);

		return utilisateur;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!utilisateurRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Utilisateur non trouvé");
		}

		utilisateurRepo.deleteById(id);
	}
	
}
