package sopra.formation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Utilisateur;

public interface IUtilisateurRepository extends JpaRepository<Utilisateur, Long> {

	@Query("select u from Utilisateur u where u.email = :email")
	Optional<Utilisateur> findUtilisateurByEmail(@Param("email") String email);
	@Query("select u from Utilisateur u where u.motDePasse= :motDePasse")
	Optional<Utilisateur> findUtilisateurByMotDePasse( @Param("motDePasse") String motDePasse);
	
}
