//PatientDetals

"use strict";

export function PatientDetals(PatDetail){
	console.log("Data-----", PatDetail)
	return{type:"POST_DATA", payload:PatDetail};
}