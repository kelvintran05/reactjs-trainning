function addDiv(){
  ReactDOM.render(<InputDiv/>,document.getElementById("div-add"))
}
class Note extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      onEdit:false,
    }
    this.delete=this.delete.bind(this);
    this.edit=this.edit.bind(this);
    this.save=this.save.bind(this);
    this.cancel=this.cancel.bind(this);
  }
  save(){

  }
  cancel(){

  }
  edit(){
    this.setState({onEdit: true});
  }
  delete(){
    $.post("/delete",{idDel:this.props.id},(data)=>{
      list.setState({mang:data})
    });
  }
  render(){
    if (this.state.onEdit){
      return(
        <div className="div-note">
          <input defaultValue= {this.props.children}/>
          <button onClick={this.save}>Save</button>
          <button onClick={this.cancel}>Cancel</button>
        </div>
      );
    }else {
      return(
        <div className="div-note">
          <p>{this.props.children}</p>
          <button onClick={this.delete}>Delete</button>
          <button onClick={this.edit}>Edit</button>
        </div>
      );
    }
  }
}
class InputDiv extends React.Component{
  constructor(props){
    super(props);
    this.send=this.send.bind(this);
  }
  send(){
    // list.setState({mang: list.state.mang.concat(this.refs.txt.value)});
    $.post("/add",{note: this.refs.txt.value}, (data)=>{
      list.setState({mang: data});
    });
    ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
  }
  render(){
    return(
      <div>
        <input type="text" ref="txt" placeholder="Enter your note!"/>
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
}
class List extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      // mang: ["Hi","Hello","ReactJS"],
      mang: [],
    }
    list=this;
  }
  render(){
    return(
      <div className="div-list">
        <div id="div-add"></div>
        <button onClick={addDiv}>Add</button>
        {
          this.state.mang.map((note,index)=>{
            return (
              <Note key={index} id={index}>{note}</Note>
            );
          })
        }
      </div>
    );
  }

  componentDidMount(){
    $.post("/getNotes", (data) => {
      this.setState({mang: data});
    });
  }
}
var list;
ReactDOM.render(
  <div>
    <List/>
  </div>
  ,document.getElementById("root"));
