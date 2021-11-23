package sopra.formation.model;



public class View {

	public static class ViewCommon {
	}

	public static class ViewConsultation extends ViewCommon{
	}
	
	public static class ViewLieu extends ViewCommon{
	}
	
	public static class ViewCreneau extends ViewCommon{
	}
	
	public static class ViewMotif extends ViewCommon{
	}
	
	public static class ViewPatient extends ViewCommon{
	}
	
	public static class ViewPraticien extends ViewCommon{
	}
	
	public static class ViewPraticienWithSpecialite extends ViewPraticien {
	}
	
	public static class ViewPraticienLieux extends ViewPraticien {
	}
	
	public static class ViewSpecialite extends ViewCommon{
	}
	
	public static class ViewUtilisateur extends ViewCommon{
	}
	
	public static class ViewUtilisateurByEmail extends ViewUtilisateur{
	}
	
	public static class ViewUtilisateurByMotDePasse extends ViewUtilisateur{
	}
	public static class ViewConsultationPraticien extends ViewPraticien {
	}
	public static class ViewConsultationPatient extends ViewPatient {
	}
}
