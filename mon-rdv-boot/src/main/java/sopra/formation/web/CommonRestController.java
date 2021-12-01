package sopra.formation.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import sopra.formation.model.Civilite;
import sopra.formation.model.Secteur;
import sopra.formation.model.Type;

@RestController
@CrossOrigin("*")
public class CommonRestController {

    @GetMapping("/civilites")
    public Civilite[] getCivilites() {
        return Civilite.values();
    }

    @GetMapping("/secteurs")
    public Secteur[] getSecteurs() {
        return Secteur.values();
    }
    
    @GetMapping("/types")
    public Type[] getTypes() {
        return Type.values();
    }
}
