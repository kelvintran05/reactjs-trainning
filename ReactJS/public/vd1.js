class Com extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      num: 0,
    }
    this.add=this.add.bind(this);
  }

  add(){
    this.state.num=this.state.num+1;
    this.setState(this.state);
  }
  render(){
    return (
      <button onClick={this.add}>HELLO {this.state.num}</button>
    );
  }
}
ReactDOM.render(
    <Com/>
  ,document.getElementById("root"));
