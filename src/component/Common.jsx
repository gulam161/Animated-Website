import React from "react";
import { NavLink } from "react-router-dom";
const url =
  "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D";
function Common({ name, imgsrc, visit, btnName }) {
  return (
    <>
      <section
        id="header"
        className="d-flex align-items-center justify-content-center flex-column"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    {name}
                    <strong className="brand-name">Gulam murtuza</strong>
                  </h1>
                  <h2 className="my-3">
                    I am Software Engineer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to={visit} className="btn-get-started">
                      {btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-2 header-img">
                  <img
                    src={imgsrc}
                    alt="image"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
