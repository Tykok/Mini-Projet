package vin.mecalife.com.miniprojet;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

@Entity
@NamedQuery(name = "Option.findAll", query = "SELECT o FROM Option o")
public class Option {

	@Id
	private String id;

	private String description;

	private int prix;

	public String getId() {
		return this.id;
	}

	public String getDescription() {
		return this.description;
	}

	public int getPrix() {
		return this.prix;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setDescription(String des) {
		this.description = des;
	}

	public void setPrix(int prix) {
		this.prix = prix;
	}

}
