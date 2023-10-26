import React from "react";
import classes from "./Service.module.css"
function Service() {
  return (
    <section id={classes.services}>
      <h1 className={classes['our-service']}>Our Services</h1>
      <div className={classes.service}>
        <div>
          <h2 >Notifications</h2>
          Get notified about Entry or Exit of your Housekeeper, Cook, Driver or
          Nanny in/from Community. Configure Notification options
        </div>
        <div>
          <h2>Gift-Pass</h2>
          Help Security validate goods being carried out, reduce chances of
          theft and spare staff from questioning
        </div>
        <div>
          <h2>Staff Attendance</h2>
          In an intuitive calendar view easily check attendance details of your
          domestic help along with details of their entry-exit time
        </div>
        <div>
          <h2>Gift-Pass</h2>
          Help Security validate goods being carried out, reduce chances of
          theft and spare staff from questioning
        </div>
        <div>
          <h2>Staff Reviews</h2>
          Next time your Help quits, refer to neighbor reviews and easily hire
          someone new from your community staff list
        </div>

        <div>
          <h2>Gift-Pass</h2>
          Help Security validate goods being carried out, reduce chances of
          theft and spare staff from questioning
        </div>
      </div>
    </section>
  );
}

export default Service;
