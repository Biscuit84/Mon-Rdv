package sopra.formation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Utilisateur;

public interface IUtilisateurRepository extends JpaRepository<Utilisateur, Long> {

	@Query("select u from Utilisateur u where u.email = :email and u.motDePasse = :password")
	Optional<Utilisateur> findUtilisateurByEmailAndPassword(@Param("email") String email,@Param("password") String password);

	
}
