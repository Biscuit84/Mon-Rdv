package sopra.formation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Motif {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(View.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(View.ViewCommon.class)
	private int version;
	@Column(length = 100)
	@JsonView(View.ViewCommon.class)
	private String nom;
	@JsonView(View.ViewCommon.class)
	private int nbCreneau;
	@ManyToOne
	@JoinColumn(name = "specialite_id")
	@JsonView(View.ViewCommon.class)
	private Specialite specialite;
	@OneToMany(mappedBy = "motif")
	private List<Consultation> consultations = new ArrayList<Consultation>();

	public Motif() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public int getNbCreneau() {
		return nbCreneau;
	}

	public void setNbCreneau(int nbCreneau) {
		this.nbCreneau = nbCreneau;
	}

	public Specialite getSpecialite() {
		return specialite;
	}

	public void setSpecialite(Specialite specialite) {
		this.specialite = specialite;
	}

	public List<Consultation> getConsultations() {
		return consultations;
	}

	public void setConsultations(List<Consultation> consultations) {
		this.consultations = consultations;
	}

}
