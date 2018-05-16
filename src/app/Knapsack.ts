export class Item {
  ratio : number;
  constructor(
    public name: string = null,
    public weight: number = null,
    public value: number = null
  ) {
    this.ratio = value / weight;
  };

  copy(p_item: Item){
    this.name = p_item.name;
    this.weight = p_item.weight;
    this.value = p_item.value;
    this._updateRatio();
  };

  _updateRatio(){
    if (this.weight == null || this.weight == 0)
      this.ratio = 0;
    else
      this.ratio = this.value / this.weight;
  }
}



var Node = function (knapsackLeftSize:number, knapsackValue:number=0, packed=false, parent:Node=null, item:Item=null) {
    this.parent = parent;
    this.item = item;
    this.knapsackValue = knapsackValue;
    this.knapsackLeftSize = knapsackLeftSize;
    this.packed = packed;
};

// non recursive greedy algorithm
export function solveKnapsackProblem(data){
  let leafOfBestSolution = new Node(data.knapsackSize);
  let parentNode = leafOfBestSolution;
  let nodesAtLevel = [];
  nodesAtLevel.push([parentNode]);

  for (let i : number = 0; i < data.getItems().length; ++i){
    nodesAtLevel.push([]);
    let item = data.getItems()[i];

    for(let j = 0; j < nodesAtLevel[i].length; ++j){
      parentNode = nodesAtLevel[i][j];
      if (item.weight <= parentNode.knapsackLeftSize){
        let node = new Node(
          parentNode.knapsackLeftSize - item.weight,
          item.value + parentNode.knapsackValue,
          true,
          parentNode,
          item
        );
        nodesAtLevel[i+1].push(node);

        if(leafOfBestSolution.item == null || leafOfBestSolution.knapsackValue < node.knapsackValue){
          leafOfBestSolution = node;
        }

      }
      let node = new Node(
        parentNode.knapsackLeftSize,
        parentNode.knapsackValue,
        false,
        parentNode,
        item
      );
      nodesAtLevel[i+1].push(node);
    }
  }

  //console.dir(leafOfBestSolution);
  let tmp = leafOfBestSolution;
  let result = [];
  while(tmp.parent != null){
    if (tmp.packed){
      //console.log(tmp.item.name);
      result.push(tmp.item);
    }
    tmp = tmp.parent;
  }
  return result;
};
