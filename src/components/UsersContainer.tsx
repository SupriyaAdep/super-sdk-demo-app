import React from "react";
import Collapse from "./ui/Collapse";

export default function UsersContainer() {
  return (
    <section className="user-list">
      <div className="user-list-table">
        <Collapse header="User list">
          {[...Array(15).keys()].map((el, i) => (
            <div className="row" key={i}>
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
        </Collapse>
      </div>
    </section>
  );
}
