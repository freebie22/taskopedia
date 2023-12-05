function MainHeader() {
    return <h1 className="heading1">React Course</h1>;
  }
  
  const subHeaderStyle = {
    color: "violet",
    backgroundColor: "gray",
  };
  
  function SubHeader() {
    return (
      <p style={subHeaderStyle}>
        This will be very interesting
      </p>
    );
  }
  
export default function Header() {
    return (
      <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
      </div>
    );
  }

//   export default Header;