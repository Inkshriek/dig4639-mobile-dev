import React from 'react';
import PropTypes from 'prop-types';

class AddContact extends React.Component {

  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.numberRef = React.createRef();
    this.onSubmit = props.onSubmit;
  }

  getInput = (event) => {
    event.preventDefault();
    window.fetch("http://plato.mrl.ai:8080/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "jervey",
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      "body": JSON.stringify({
        "name": this.nameRef.current.value,
        "number": this.numberRef.current.value
      })
    })
    .then(response => response.json())
    .then(() => {
      this.onSubmit(this.nameRef.current.value, this.numberRef.current.value);
    })
    .catch(err => {
      console.log(err)
    });

    this.nameRef.current.value = "";
    this.numberRef.current.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.getInput}>
          <input type="text" ref={this.nameRef} />
          <input type="number" ref={this.numberRef} />
          <button>Add Contact</button>          
        </form>
      </div>
    );
  }
}

AddContact.propTypes = {
  onSubmit: PropTypes.func
};

export default AddContact;