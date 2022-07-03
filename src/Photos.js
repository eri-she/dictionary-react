import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <div key={index} className="col-4">
                <img
                  src={photos.src.landscape}
                  alt="photos"
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
