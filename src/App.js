import React, { Component } from 'react';
import './engine/flowy.css';
import './engine/flowy.min.css';
import './engine/styles.css';
import { render } from "react-dom";
import $, { event } from "jquery";
import coreDragAndDrop from "./engine/main.js";

class App extends Component {

  constructor() {
    super();
    this.state =  {
      aclick: false,
      noinfo: true,
      rightcard: false,
      tempblock :  null,
      tempblock2 : null
    }
  }
  
  // Drag drop event in start of rendering.
  componentDidMount = () => {
    coreDragAndDrop(); 
    $('#blocklist').html = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/eye.svg"></div><div class="blocktext">                        <p class="blocktitle">New visitor</p><p class="blockdesc">Triggers when somebody visits a specified page</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/action.svg"></div><div class="blocktext">                        <p class="blocktitle">Action is performed</p><p class="blockdesc">Triggers when somebody performs a specified action</p></div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/time.svg"></div><div class="blocktext">                        <p class="blocktitle">Time has passed</p><p class="blockdesc">Triggers after a specified amount of time</p>          </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/error.svg"></div><div class="blocktext">                        <p class="blocktitle">Error prompt</p><p class="blockdesc">Triggers when a specified error happens</p>              </div></div></div>';
    // document.getElementById("blocklist").innerHTML = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/eye.svg"></div><div class="blocktext">                        <p class="blocktitle">New visitor</p><p class="blockdesc">Triggers when somebody visits a specified page</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/action.svg"></div><div class="blocktext">                        <p class="blocktitle">Action is performed</p><p class="blockdesc">Triggers when somebody performs a specified action</p></div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/time.svg"></div><div class="blocktext">                        <p class="blocktitle">Time has passed</p><p class="blockdesc">Triggers after a specified amount of time</p>          </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/error.svg"></div><div class="blocktext">                        <p class="blocktitle">Error prompt</p><p class="blockdesc">Triggers when a specified error happens</p>              </div></div></div>';
    window.addEventListener('mousedown', this.mouseDown);
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
    window.addEventListener('touchstart block', (event) => {
      this.setState({
        aclick: true,
        noinfo: false
      }); 
      if (event.target.closest(".create-flowy")) {
        this.setState({
          noinfo: true
        });
      }            
    }); 
    window.addEventListener('click side', (event) => {
      document.querySelector(".navactive").classList.add("navdisabled");
      document.querySelector(".navactive").classList.remove("navactive");
      this.classList.add("navactive");
      this.classList.remove("navdisabled");
      if (this.getAttribute("id") == "triggers") {
           $('#blocklist').html = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/eye.svg"></div><div class="blocktext">                        <p class="blocktitle">New visitor</p><p class="blockdesc">Triggers when somebody visits a specified page</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/action.svg"></div><div class="blocktext">                        <p class="blocktitle">Action is performed</p><p class="blockdesc">Triggers when somebody performs a specified action</p></div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/time.svg"></div><div class="blocktext">                        <p class="blocktitle">Time has passed</p><p class="blockdesc">Triggers after a specified amount of time</p>          </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/error.svg"></div><div class="blocktext">                        <p class="blocktitle">Error prompt</p><p class="blockdesc">Triggers when a specified error happens</p>              </div></div></div>';
      } else if (this.getAttribute("id") == "actions") {
           $('#blocklist').html = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="5"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/database.svg"></div><div class="blocktext">                        <p class="blocktitle">New database entry</p><p class="blockdesc">Adds a new entry to a specified database</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="6"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/database.svg"></div><div class="blocktext">                        <p class="blocktitle">Update database</p><p class="blockdesc">Edits and deletes database entries and properties</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="7"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/action.svg"></div><div class="blocktext">                        <p class="blocktitle">Perform an action</p><p class="blockdesc">Performs or edits a specified action</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="8"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/twitter.svg"></div><div class="blocktext">                        <p class="blocktitle">Make a tweet</p><p class="blockdesc">Makes a tweet with a specified query</p>        </div></div></div>';
      } else if (this.getAttribute("id") == "loggers") {
           $('#blocklist').html = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="9"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/log.svg"></div><div class="blocktext">                        <p class="blocktitle">Add new log entry</p><p class="blockdesc">Adds a new log entry to this project</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="10"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/log.svg"></div><div class="blocktext">                        <p class="blocktitle">Update logs</p><p class="blockdesc">Edits and deletes log entries in this project</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="11"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/error.svg"></div><div class="blocktext">                        <p class="blocktitle">Prompt an error</p><p class="blockdesc">Triggers a specified error</p>        </div></div></div>';
      }         
    }); 
  }

  mouseDown = (event) => {
    this.setState({
      aclick: true,
      noinfo: false,
      // rightcard: false
    }); 
    if (event.target.closest(".create-flowy")) {
      this.setState({
        noinfo: true
      });
    }
  }

  mouseMove = (event) => {
    this.setState({
      aclick: true
    });
  }
  
  mouseUp = (event) => {
    if (event.type === "mouseup" && this.state.aclick && !this.state.noinfo) {
      if (!this.state.rightcard && event.target.closest(".block") && !event.target.closest(".block").classList.contains("dragging")) {
            this.setState({
              tempblock : event.target.closest(".block"),
              rightcard : true
            });     
            document.getElementById("properties").classList.add("expanded");
            document.getElementById("propwrap").classList.add("itson");
            this.state.tempblock.classList.add("selectedblock");
       }
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('mousedown', this.mouseDown);
    window.removeEventListener('mouseup', this.mouseUp);
    window.removeEventListener('mouseMove', this.mouseMove);
  }

  closePanel = () => {
    if (this.state.rightcard) {
      this.setState({
        rightcard : false
      });
      
      $('#properties').removeClass("expand");

      setTimeout(function(){
        $('#propwrap').removeClass("itson");
      }, 10);
      this.state.tempblock.classList.remove("selectedblock");
    }
  }

  render () {
    return (
      <div id = "App">
        <div id="navigation">
          <div id="leftside">
              <div id="details">
              <div id="back"><img src="./assets/arrow.svg"></img></div>
              <div id="names">
                  <p id="title">Your automation pipeline</p>
                  <p id="subtitle">Marketing automation</p>
              </div>
          </div>            
          </div>
          <div id="centerswitch">
              <div id="leftswitch">Diagram view</div>
              <div id="rightswitch">Code editor</div>
          </div>
          <div id="buttonsright">
              <div id="discard">Discard</div>
              <div id="publish">Publish to site</div>
          </div>
        </div>
        <div id = "leftcard">
          <div id="closecard">
              <img src="assets/closeleft.svg"></img>
          </div>
          <p id="header">Blocks</p>
          <div id="search">
            <img src="assets/search.svg"></img>
            <input type="text" placeholder="Search blocks"></input>
          </div>
          <div id="subnav">
            <div id="triggers" className="navactive side">Triggers</div>
            <div id="actions" className="navdisabled side">Actions</div>
            <div id="loggers" className="navdisabled side">Loggers</div>
          </div>
          <div id="blocklist">
            <div className="blockelem create-flowy noselect">
              <input type="hidden" name='blockelemtype' className="blockelemtype" value="1"></input>
              <div className="grabme">
                  <img src="assets/grabme.svg"></img>
              </div>
              <div className="blockin">
                    <div className="blockico">
                        <span></span>
                        <img src="assets/eye.svg"></img>
                    </div>
                    <div className="blocktext">
                        <p className="blocktitle">New visitor</p>
                        <p className="blockdesc">Triggers when somebody visits a specified page</p>
                    </div>
                </div>
            </div>
            <div className="blockelem create-flowy noselect">
              <input type="hidden" name='blockelemtype' className="blockelemtype" value="2"></input>
              <div className="grabme">
                  <img src="assets/grabme.svg"></img>
              </div>
              <div className="blockin">
                  <div className="blockico">
                    <span></span>
                    <img src="assets/action.svg"></img>
                  </div>
                  <div className="blocktext">
                      <p className="blocktitle">Action is performed</p>
                      <p className="blockdesc">Triggers when somebody performs a specified action</p>
                  </div>
                </div>
            </div>
            <div className="blockelem create-flowy noselect">
              <input type="hidden" name='blockelemtype' className="blockelemtype" value="3"></input>
              <div className="grabme">
                  <img src="assets/grabme.svg"></img>
              </div>
              <div className="blockin">
                  <div className="blockico">
                      <span></span>
                      <img src="assets/time.svg"></img>
                  </div>
                  <div className="blocktext">
                      <p className="blocktitle">Time has passed</p>
                      <p className="blockdesc">Triggers after a specified amount of time</p>
                  </div>
                </div>
            </div>
            <div className="blockelem create-flowy noselect">
              <input type="hidden" name='blockelemtype' className="blockelemtype" value="4"></input>
              <div className="grabme">
                  <img src="assets/grabme.svg"></img>
              </div>
              <div className="blockin">
                <div className="blockico">
                  <span></span>
                  <img src="assets/error.svg"></img>
                </div>
                <div className="blocktext">
                    <p className="blocktitle">Error prompt</p>
                    <p className="blockdesc">Triggers when a specified error happens</p>
                  </div>
              </div>
            </div>
          </div>
          <div id="footer">
              <a href="https://github.com/alyssaxuu/flowy/" target="_blank">GitHub</a>
              <span>·</span>
              <a href="https://twitter.com/alyssaxuu/status/1199724989353730048" target="_blank">Twitter</a>
              <span>·</span>
              <a href="https://alyssax.com" target="_blank"><p>Made with</p><img src="assets/heart.svg"></img><p>by</p> Alyssa X</a>
          </div>
        </div>
        <div id="propwrap">
          <div id="properties">
            <div id="close">
              <img src="assets/close.svg" onClick = {this.closePanel}></img>
            </div>
            <p id="header2">Properties</p>
            <div id="propswitch">
              <div id="dataprop">Data</div>
              <div id="alertprop">Alerts</div>
              <div id="logsprop">Logs</div>
            </div>
            <div id="proplist">
              <p className="inputlabel">Select database</p>
              <div className="dropme">Database 1 <img src="assets/dropdown.svg"></img></div>
              <p className="inputlabel">Check properties</p>
              <div className="dropme">All<img src="assets/dropdown.svg"></img></div>
              <div className="checkus"><img src="assets/checkon.svg"></img><p>Log on successful performance</p></div>
              <div className="checkus"><img src="assets/checkoff.svg"></img><p>Give priority to this block</p></div>
            </div>
            <div id="divisionthing"></div>
            <div id="removeblock" onClick = {this.removeBlockEvent} >Delete blocks</div>
          </div>
        </div>
        <div id="canvas">
        </div>
      </div>
    );
  }
 
}

export default App;
