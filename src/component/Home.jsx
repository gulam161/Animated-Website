import React from "react";
import Common from "./Common";
const url =
  "https://media.istockphoto.com/id/1404931955/photo/gold-capital-letter-g.webp?b=1&s=170667a&w=0&k=20&c=m2rTRL_EYTa-I4__Pu_l8r4n2ObKNcjen5UNo_KJLkU=";

function Home() {
  return (
    <>
      <Common
        name="Grow your skill with "
        imgsrc={url}
        visit="/about"
        btnName="Get Started"
      />
    </>
  );
}

export default Home;
