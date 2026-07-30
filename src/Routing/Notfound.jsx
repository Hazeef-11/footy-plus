import React from "react";

const Notfound = () => {
   if (loading) {
    return (
      <div>
        <img className="bg" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
        <div className="loading">
          <Atom color="#ffffff" size="medium" text="" textColor="" />
          <h3 style={{color:"white"}}>Loading.....</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <img className="bg" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
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
        <img className="bg" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <h1 style={{position:"absolute",zIndex:"5",marginTop:"-700px",marginLeft:"570px",color:"white"}}>404 - Page Not Found</h1>
    </div>
  );
};

export default Notfound;
