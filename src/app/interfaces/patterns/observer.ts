export interface Observer{
  //constructor(subject:Observatable);
  update();
}

export interface Observatable{
  observers:Observer[];
  attach(observer:Observer);
  detach(observer:Observer);
  _notify();
}
