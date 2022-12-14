import React from "react";

export default function UsersMediaContainer() {
  return (
    <section className="user-media">
      <div className="user-media-table">
        <div className="row">
          {[...Array(30).keys()].map((el, i) => (
            <div className="media-card" key={i}>
              <div className="--video">
                <div className="remote-video-container">Subscribed no: {i}</div>
              </div>
              <div className="--actions">
                <button className="btn ">Remote mute Audio</button>
                <button className="btn">Remote mute Video</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
