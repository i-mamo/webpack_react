import React, { Component } from 'react'


export default class Home2 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    $("#name").html("page")
    var pathName = location.pathname;
    console.log(pathName);
    $('#pagess').on('click', function (e) {
      e.preventDefault()
      location.pathname = "/";
    });
  }



  render() {
    return (
      <div id="reactApp">
        <div id='name'>a</div>
        <div id="pagess">押したらURL変更</div>
        <div>
          TESTTESTTEST
        </div>
      </div>
    );
  }
}
