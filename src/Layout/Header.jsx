import logo from "../images/react.png";

const MainHeader = () => {
  return (
    <div className="pt-3 py-2 pl-2" style={{ backgroundColor: "black" }}>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 pt-4 text-white-50">React Course - TaskOPedia</span>
    </div>
  );
}

const subHeaderStyle = {
  color: "violet",
  backgroundColor: "gray",
};

const SubHeader = () => {
  return (
    <p style={subHeaderStyle} className="text-center">
      This will be very interesting
    </p>
  );
}

const Header = () => {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}

export default Header;
