import { Node } from './_Node';
import { KnapsackItem } from '../../structures/knapsack/KnapsackItem';



export function solveKnapsackProblem(items:KnapsackItem[], knapsackSize:number) {
  let leafOfBestSolution = new Node(knapsackSize);
  let parentNode = leafOfBestSolution;

  // stores nodes based on theirs location in the tree data structure
  let nodesAtDepth = [];
  nodesAtDepth.push([parentNode]);

  //----------------------------------------------------------------------------

  // iterate through each item
  for (let i = 0; i < items.length; ++i) {
    nodesAtDepth.push([]);
    let item = items[i];

    // iterate through each node included to previous tree's depth
    for(let j = 0; j < nodesAtDepth[i].length; ++j) {
      parentNode = nodesAtDepth[i][j];

      // include item
      if (item.weight <= parentNode.knapsackLeftSize) {
        let node = new Node(
          parentNode.knapsackLeftSize - item.weight,
          item.value + parentNode.knapsackValue,
          true,
          parentNode,
          item
        );
        nodesAtDepth[i+1].push(node);

        // overwrite best solution
        if(leafOfBestSolution.item == null || leafOfBestSolution.knapsackValue < node.knapsackValue) {
          leafOfBestSolution = node;
        }

      }
      // do not include item
      let node = new Node(
        parentNode.knapsackLeftSize,
        parentNode.knapsackValue,
        false,
        parentNode,
        item
      );
      nodesAtDepth[i+1].push(node);
    }
  }

  //----------------------------------------------------------------------------

  // pack solution into array
  let result = [];
  let tmp = leafOfBestSolution;
  while(tmp.parent != null) {
    if (tmp.packed) {
      result.push(tmp.item);
    }
    tmp = tmp.parent;
  }

  return result;
};
