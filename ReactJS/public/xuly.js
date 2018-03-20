// var createReactClass = require("create-react-class");
// var Component= createReactClass.createClass({
//   render: function (){
//     return(
//       <h1 className = "mauvang"> Example1 </h1>
//     );
//   }
// });
function getName(name){
  alert(name)
}
//Cach khoi tao Component chuan ES6
class Component extends React.Component{
    getInfor() {
      alert(123);
    }

    addStudent(){
      this.state.SumMember = this.state.SumMember + 1;
      this.setState(this.state);
    }

    constructor(props){
      super(props);

      this.state = {
        SumMember: parseInt(this.props.SumMember),
      }

      this.addStudent = this.addStudent.bind(this);
    }

    render() {
    return(
      <div>
        <h1 className = "mauvang"> {this.props.name} </h1>
        <hr/>
        <div>So hoc vien: {this.state.SumMember}</div>
        <p>{this.props.children}</p>
        <hr/>
        <button onClick={() => {var str = this.props.name + " - " + this.props.children; getName(str)}}>Information</button>
        <button onClick={this.addStudent}>Them hoc vien</button>
        <Component1/>
      </div>
    );
  }
}

//Cach viet 1
// const Component = () => (
//   <h1 className = "mauvang"> Example1 </h1>
// );

//Cach viet 2
// const Component = () => {
//   return (<h1 className = "mauvang"> Example1 </h1>);
// }

class Component1 extends React.Component{
  render(){
    return <h3>Lap trinh ReactJS </h3>;
  }
}

class InputTag extends React.Component{
  constructor(props){
    super(props);
    this.show = this.show.bind(this);
  }
  show(){
    var text=this.refs.s1.value;
    alert(text);
  }

  render(){
    return (
      <div>
        <select ref="s1">
          <option value="a">AAAA</option>
          <option value="b">BBB</option>
          <option value="c">CCC</option>
        </select>
        <input type = "text" ref="txt"/>
        <button onClick={this.show}>Hien thi</button>
      </div>
    )
  }
}
ReactDOM.render(
  <div>
    <InputTag/>
    <Component name="ReactJS" SumMember="10">Subject ReactJS</Component>
    <Component name="NodeJS" SumMember="20">Subject NodeJS</Component>
  </div>
  ,document.getElementById("root"));
