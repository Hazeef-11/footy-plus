import React from "react";

const Notfound = () => {
   if (loading) {
    return (
      <div>
        <img className="bg" src="people-soccer-stadium.jpg" alt="" />
        <div className="loading">
          <Atom color="#ffffff" size="medium" text="" textColor="" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <img className="bg" src="people-soccer-stadium.jpg" alt="" />
        <h1
          style={{
            position: "absolute",
            zIndex: 5,
            marginTop: -700,
            marginLeft: 550,
            color: "white",
          }}
        >
          🌐 Oops! {error}
        </h1>
      </div>
    );
  }
  return (
    <div>
        <img className="bg" src="people-soccer-stadium.jpg" alt="" />
      <h1 style={{position:"absolute",zIndex:"5",marginTop:"-700px",marginLeft:"570px",color:"white"}}>404 - Page Not Found</h1>
    </div>
  );
};

export default Notfound;
