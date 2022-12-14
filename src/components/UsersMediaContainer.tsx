import React from "react";

export default function UsersMediaContainer() {
  return (
    <section className="user-media">
      <div className="user-media-table">
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7].map((el, i) => (
            <div className="media-card">
              <div className="--video">
                <div className="remote-video-container">Subscribed </div>
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
