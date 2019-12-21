// 'use strict';
const Tree = require('./Tree');
const fs = require('fs');

(function() {
	const input = fs.readFileSync('./day6/input.txt', 'utf8');
	let orbitalRelationships = input.split('\n');
	
	var tree = new Tree('COM');
	while(orbitalRelationships.length) {
		orbitalRelationships.forEach((item, index) => {
			const [parent, child] = item.split(')');
			try {
				tree.add(child, parent, tree.traverseBF);
				delete orbitalRelationships[index];
			} catch {}
		});
		orbitalRelationships = orbitalRelationships.filter(x => x);
	}
	
	function countOrbits(node) {
		let parent = node.parent;
		let counter = 0;
		while (parent) {
			parent = parent.parent;
			counter++;
		}
		sum += counter;
	}

	let sum = 0;
  tree.traverseBF(countOrbits);
	console.log(`There are a total of ${sum} orbits`);
})();
