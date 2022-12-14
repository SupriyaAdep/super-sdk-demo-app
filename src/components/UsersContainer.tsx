import React from "react";

export default function UsersContainer() {
  return (
    <section className="user-list">
      <div className="user-list-table">
        {[1, 2, 3, 4, 5, 6, 7].map((el, i) => (
          <div className="row">
            <div className="col status-col">
              <div className="status-badge">
                <div>Subscribed </div>
              </div>
            </div>
            <div className="col uid-col">uid: {i}</div>
            <div className="col actions-col">
              <button className="btn ">Subscribe</button>
              <button className="btn">Unsubscribe</button>
              <button className="btn">Allow</button>
              <button className="btn">Disallow</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
