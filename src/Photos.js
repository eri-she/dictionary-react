import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <div key={index} className="col-3">
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photos.src.tiny}
                    alt="photos"
                    className="img-fluid rounded"
                  />
                </a>
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
