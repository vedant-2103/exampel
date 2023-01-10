// In this module we import react and component class from react module
//  imrc for generating a react component shortcut and cc for class component

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imageUrl : "https://picsum.photos/200" //Generates a random 200 by 200 image
    tags: [],
  };

  // styles = {
  //   fontWeight: Bold,
  //   fontSize: 10,
  // };

  // Conditional rendering

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  } 
  render() {
    return (
      <div>
        {/* img src = {this.state.imageUrl} alt="" */}
        {/* <span style ={this.styles} className ={ badge badge-primary m-2}> {this.formatCount()} </span> */}
        {/* <span style ={{fontSize:10}} className ={ badge badge-primary m-2}> {this.formatCount()} </span> */}
        {/* <span className={this.getAlertClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */}

        {/* It can also be rendred as 
          {this.state.tags.lebgth === 0 && "Please create a new tag"}
          because in JS the last string is considered as true as the string is not empty and
          hence the last string is the output of the logical && */}
        {this.renderTags()}
      </div>
    );
  }

  // getAlertClasses() {
  //   let classes = "alert m-2 alert-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;
  // }

  // formatCount() {
  //   // Alternative way: return this.state.count === 0 ? 'Zero' : this.state.count;
  //   const { count } = this.state;
  //   return count === 0 ? "Zero" : count;
  // }
}

export default Counter;
