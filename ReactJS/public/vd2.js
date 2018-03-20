class Album extends React.Component{
  next(){
      this.setState({hinh:this.state.hinh==4?4:this.state.hinh+1});
  }
  prev(){
    this.setState({hinh:this.state.hinh==1?4:this.state.hinh-1});
  }
  constructor(props){
    super(props)
    this.state = {
      hinh: 1,
    }
    this.next=this.next.bind(this);
    this.prev=this.prev.bind(this);
  }
  render(){
    return (
      <div className="div-album">
        <img src={"images/"+this.state.hinh+".png"}/>
        <hr/>
        <button onClick={this.next}>next</button>
        <button onClick={this.prev}>back</button>
      </div>
    )
  }
}
ReactDOM.render(
  <Album/>
  ,document.getElementById("root"));
