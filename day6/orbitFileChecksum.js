// 'use strict';
const Tree = require('./Tree');
const fs = require('fs');

(function() {
  const input = fs.readFileSync('./day6/input.txt', 'utf8');
  let orbitalRelationships = input.split('\n');

  var tree = new Tree('COM');
  while (orbitalRelationships.length) {
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

	function buildPathToCOM(target) {
		let targetNode;
		tree.contains(x => {
			if (x.name === target) targetNode = x;
		}, tree.traverseBF);

		let path = [];
		while(targetNode) {
			if(targetNode.parent) path.push(targetNode.name);
			targetNode = targetNode.parent;
		}
		return path;
	}

	const YOUPath = buildPathToCOM('YOU').reverse();
	const SANPath = buildPathToCOM('SAN').reverse();

	let commonAncestorPathLength;
	const loopMax = Math.min(YOUPath.length, SANPath.length);
	for (let i = 0; i < loopMax; i++) {
		if(YOUPath[i] !== SANPath[i]) {
			commonAncestorPathLength = i;
			break;
		}
	}
	const YOUToCommonAncestor = YOUPath.length - commonAncestorPathLength - 1;
	const SANToCommonAncestor = SANPath.length - commonAncestorPathLength - 1;
	const shortestDistance = YOUToCommonAncestor + SANToCommonAncestor;
	
  console.log(`The shortest distance between YOU and SAN is ${shortestDistance}`);

})();
