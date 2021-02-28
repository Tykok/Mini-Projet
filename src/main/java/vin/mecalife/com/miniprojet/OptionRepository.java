package vin.mecalife.com.miniprojet;

import org.springframework.data.repository.CrudRepository;

public interface OptionRepository extends CrudRepository<Option, String> {

	
	Option getById(String id);
	
}
