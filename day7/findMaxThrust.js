const { amplificationCircuit, amplificationCircuitFeedback } = require('./amplificationCircuit');

function findMaxThrust(instructionSet, phaseSet, withFeedback) {
	let phase1, phase2, phase3, phase4, phase5;
	const setOfPhases = new Set([]);
	for (let i = 0; i < 5; i++) {
		let set1 = [...phaseSet];
		phase1 = set1[i];
		set1.splice(i,1);
		for (let j = 0; j < 4; j++) {
			let set2 = [...set1];
			phase2 = set2[j];
			set2.splice(j,1);
			for (let k = 0; k < 3; k++) {
				let set3 = [...set2];
				phase3 = set3[k];
				set3.splice(k,1);
				for (let l = 0; l < 2; l++) {
					let set4 = [...set3];
					phase4 = set4[l];
					set4.splice(l,1);
					for (let m = 0; m < 1; m++) {
						let set5 = [...set4];
						phase5 = set5[m];
						set5.splice(m,1);
						setOfPhases.add([phase1,phase2,phase3,phase4,phase5]);
					}
				}	
			}
		}
	}
	
	let highestResult = 0;
	setOfPhases.forEach(phases => {
		let result;
		if(withFeedback) {
			result = amplificationCircuitFeedback(phases, instructionSet);	
		} else {
			result = amplificationCircuit(phases, instructionSet);	
		}
		if(result > highestResult) highestResult = result;
	});
	return highestResult;
};

module.exports = findMaxThrust;