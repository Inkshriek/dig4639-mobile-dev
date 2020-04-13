import React from 'react';
import AddContact from "../AddContact/index.js";
import RemoveContact from "../RemoveContact/index.js";
import ShowProfile from "../ShowProfile/index.js";

class ShowContacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};
    this.profileRef = React.createRef();
  }

  contactWasAdded = (name, number) => {
    let newcontacts = this.state.contacts;
    newcontacts.push({
      name: name,
      number: number
    });
    this.setState(newcontacts);
    this.profileRef.current.addToCount();
  }

  contactWasDeleted = (position) => {
    let newcontacts = this.state.contacts;
    newcontacts.splice(position);
    this.setState(newcontacts);
    this.profileRef.current.removeFromCount();
  }

  componentDidMount() {
    window.fetch("http://plato.mrl.ai:8080/contacts", {
      "method": "GET",
      "headers": {
        "api": "jervey",
        "Content-Type": "application/json",
        "Accept":"application/json"
      }
    })
    .then(response => response.json())
    .then((data) => {
      this.setState({
        contacts: data.contacts
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <AddContact onSubmit={this.contactWasAdded}/>
        <ShowProfile ref={this.profileRef}/>
        {
          this.state.contacts.map((value, index) => {
            return (
              <div key={index}>
                <p>{value.name}<br/>{value.number}</p>
                <RemoveContact onSubmit={this.contactWasDeleted} position={index}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default ShowContacts;