class Image extends React.Component{
  changeImage(){
    this.setState({hinh: (this.state.hinh % 3)+1});
  }
  constructor(props){
    super(props);
    this.state = {
      hinh: 1,
    }
    this.changeImage=this.changeImage.bind(this);
  }
  render(){
    return (
      <img src={"images/"+this.state.hinh+".png"}/>
    );
  }
  componentDidMount(){
    setInterval(this.changeImage,1000);
  }
}
ReactDOM.render(
  <Image/>
  ,document.getElementById("root"));
