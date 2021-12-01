package sopra.formation;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import sopra.formation.model.Utilisateur;
import sopra.formation.repository.IUtilisateurRepository;

@SpringBootTest
class MonRdvBootApplicationTests {

	@Autowired
	private IUtilisateurRepository utilisateurRepo;
	
	@Test
	void contextLoads() {
		
		
		
		Utilisateur user = new Utilisateur();
		user.setEmail("jeanjak@hotmail");
		user.setMotDePasse("ouioui");
		
		
		user=(Utilisateur) utilisateurRepo.save(user);
	}
	

}
