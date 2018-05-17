export class KnapsackItem {

  //! value / weight
  ratio:number;

  //----------------------------------------------------------------------------

  constructor(
    public name:string = null,
    public weight:number = null,
    public value:number = null
  ) {
    this.ratio = value / weight;
  };

  //----------------------------------------------------------------------------

  //! Copy properties of given item.
  copy(p_item:KnapsackItem) {
    this.name = p_item.name;
    this.weight = p_item.weight;
    this.value = p_item.value;
    this._updateRatio();
  };

  clear() {
    this.name = null;
    this.weight = null;
    this.value = null;
    this._updateRatio();
  }

  //----------------------------------------------------------------------------

  _updateRatio() {
    if (this.weight == null || this.weight == 0)
      this.ratio = 0;
    else
      this.ratio = this.value / this.weight;
  }

}
