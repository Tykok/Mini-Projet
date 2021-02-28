package vin.mecalife.com.miniprojet;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

	@Autowired
	OptionRepository repo;

	@GetMapping("/option")
	public List<Option> getRoot() {
		return (List<Option>) repo.findAll();
	}

	@PostMapping("/option")
	public ResponseEntity<Option> insert(@RequestBody Option o) {
		if (o.getId().length() <= 0) {
			return new ResponseEntity<Option>(o, HttpStatus.CONFLICT);
		}
		repo.save(o);
		return new ResponseEntity<Option>(o, HttpStatus.CREATED);
	}

}
/*
 * String listOptionJSON = null;
 * 
 * final ObjectMapper mapper = new ObjectMapper(); try { listOptionJSON =
 * mapper.writeValueAsString(listOption); } catch (JsonProcessingException e) {
 * // TODO Auto-generated catch block e.printStackTrace(); }
 * 
 * m.put("optionVehicule", listOptionJSON); return "index";
 */

/*
 * @GetMapping("/frm") public String setData() { return "frm_option"; }
 * 
 * @PostMapping("/frm") public String insertData(@RequestParam String
 * id, @RequestParam String description, @RequestParam int prix) { Option o =
 * new Option(); o.setId(id); o.setDescription(description); o.setPrix(prix);
 * repo.save(o); return "redirect:routeur"; }
 * 
 * @PostMapping("/update") public String updateData(@RequestParam String
 * id, @RequestParam String description, @RequestParam int prix) { Option o =
 * repo.getById(id); o.setDescription(description); o.setPrix(prix);
 * repo.save(o); return "redirect:routeur"; }
 */
