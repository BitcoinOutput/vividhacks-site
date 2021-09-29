import styles from "./sponser.module.css";
import * as useOnScreen from "../Hooks/isVisible";
import React, { useRef, useState } from "react";
class Sponsor extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.modalRef = React.createRef();
    this.modalBtn = React.createRef();
    this.coverBG = React.createRef();
    this.hackclubIframe = React.createRef();

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.hackclubIframe.current.src =
      "https://bank.hackclub.com/donations/start/vivid-hacks";
    this.modalRef.current.style.display = "block";
    this.coverBG.current.style.display = "block";
  }
  render() {
    var classThis = this;
    if (typeof window === "object") {
      document.addEventListener("click", function (event) {
        if (classThis.modalRef.current.contains(event.target)) {
        } else {
          if (classThis.modalBtn.current.contains(event.target)) return;
          classThis.modalRef.current.style.display = "none";
          classThis.coverBG.current.style.display = "none";
        }
      });
    }
    return (
      <div ref={this.containerRef}>
        <div
          className={styles.modal}
          ref={this.modalRef}
          style={{ display: "none" }}
        >
          <iframe ref={this.hackclubIframe}></iframe>
        </div>
        <div
          className={styles.cover}
          ref={this.coverBG}
          style={{ display: "none" }}
        ></div>
        <div className={styles.container}>
          <h2 className={styles.heading}>Sponsors</h2>
          <div className={styles.sponsorGrid}>
             <div className={styles.sponsor}>
              <a href="https://www.echoar.xyz/" target="_blank"><img src="/echoarlogo.png"></img></a>
              <div><span>Echo AR</span></div>
            </div>
            <div className={styles.sponsor}>
              <a href="https://hackclub.org" target="_blank">
                <img src="/hackclublogo.svg" width="318"></img>
              </a>
              <div>
                <span>Hack Club</span>
              </div>
            </div>

            <div className={styles.sponsor}>
              <a href="https://www.stickermule.com" target="_blank">
                <img src="/sticker-mule-logo.svg" width="250"></img>
              </a>
              <div>
                <span>Sticker Mule</span>
              </div>
            </div>

            <div className={styles.sponsor}>
              <a href="https://www.leadlearners.ca" target="_blank">
                <img src="/leadinglearners.png" width="170"></img>
              </a>
              <div>
                <span>Leading Learners</span>
              </div>
            </div>
            <div className={styles.sponsor}>
              <a href="https://launchx.com/" target="_blank">
                <img src="/launchx.png" width="240"></img>
              </a>
              <div>
                <span>LaunchX</span>
              </div>
            </div>
          </div>
          <p className={styles.para}>Want to be our partner?</p>
          <button className={styles.button} style={{ marginBottom: 0 }}>
            <a href="https://vivd.tk/prospectus" target="_blank">
              LEARN MORE
            </a>
          </button>
          <p className={styles.para}>Or </p>
          <button className={styles.button} ref={this.modalBtn}>
            <a onClick={this.openModal} style={{ cursor: "pointer" }}>
              Donate to us!
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Sponsor;
