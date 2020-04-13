import React from 'react';
import PropTypes from 'prop-types';

class RemoveContact extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = props.onSubmit;
    this.state = {position: props.position};
  }

  deleteContact = (event) => {
    event.preventDefault();
    window.fetch("http://plato.mrl.ai:8080/contacts/remove", {
      "method": "POST",
      "headers": {
        "api": "jervey",
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      "body": JSON.stringify({
        "position": this.state.position
      })
    })
    .then(response => response.json())
    .then(() => {
        this.onSubmit(this.state.position);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.deleteContact}>Delete Contact</button>          
      </div>
    );
  }
}

RemoveContact.propTypes = {
  onSubmit: PropTypes.func
};

export default RemoveContact;