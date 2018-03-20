class Note extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.children}</p>
        <img src={this.props.src}/>
      </div>
    );
  }
}

class List extends React.Component{
  add(){
    this.state.mang.push(
        {src: "images/1.png",noiDung:"ReactJS"},
    );
    this.setState(this.state);
  }
  constructor(props){
    super(props);
    this.state = {
      mang: [
        {src:"images/2.png", noiDung: "hi"},
        {src:"images/3.png", noiDung: "hi1"},
      ],
    }
    this.add=this.add.bind(this);
  }
  render(){
    return(
      <div>
        <button onClick = {this.add}>Them</button>
        {
          this.state.mang.map((note,index)=>{
            return <Note key={index} src={note.src}>{note.noiDung}</Note>
          })
        }
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <List/>
  </div>
  ,document.getElementById("root"));
