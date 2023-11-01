import React from "react";
import Common from "./Common";

const url =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D";
function About() {
  return (
    <>
      <Common
        name="Welcome to about page "
        imgsrc={url}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
}

export default About;
