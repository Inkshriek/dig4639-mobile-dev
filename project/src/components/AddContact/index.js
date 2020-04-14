import React from 'react';
import PropTypes from 'prop-types';
import "./index.css";

class AddContact extends React.Component {

  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.numberRef = React.createRef();
    this.onSubmit = props.onSubmit;
  }

  getInput = (event) => {
    event.preventDefault();
    let name = this.nameRef.current.value.trim();
    let number = this.numberRef.current.value.trim();
    if (name.length > 0 && number.length > 0) {
      window.fetch("http://plato.mrl.ai:8080/contacts/add", {
        "method": "POST",
        "headers": {
          "api": "jervey",
          "Content-Type": "application/json",
          "Accept":"application/json"
        },
        "body": JSON.stringify({
          "name": name,
          "number": number
        })
      })
      .then(response => response.json())
      .then(() => {
        this.onSubmit(name, number);
      })
      .catch(err => {
        console.log(err)
      });
  
      this.nameRef.current.value = "";
      this.numberRef.current.value = "";
    }
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.getInput}>
          <input className="textbox" maxlength="20" type="text" placeholder="Full Name" ref={this.nameRef} /><br/>
          <input className="textbox" maxlength="20" type="text" placeholder="Phone Number" ref={this.numberRef} /><br/>
          <button className="add">Add Contact</button>          
        </form>
      </div>
    );
  }
}

AddContact.propTypes = {
  onSubmit: PropTypes.func
};

export default AddContact;