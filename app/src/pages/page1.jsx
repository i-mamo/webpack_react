import React, { Component } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { createBrowserHistory } from 'history';

const h = createBrowserHistory()


export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      error: null,
      name: null,
      pass: null,
      NODE: `aaa`,
      path: location.pathname
    }
  }
  modal_close(e) {
    let a = document.getElementsByClassName('modal')
    a.style.opacity = 0
  }


  check(e) {
    let a = document.querySelectorAll('input')
    if ((a[0].value != '' && a[1].value == '') || (a[0].value == '' && a[1].value != '')) {
      console.log('モーダルで警告');
      this.setState({
        NODE:
          <div className="modal">
            <div>警告</div>
            <div>入力途中ですが別ページに移動しますか？</div>
            <Link to="/" onClick={e => this.modal_close(e)}>キャンセル</Link>
            <Link to='/page1'>OK</Link>
          </div>
      })
    } else if (a[0].value && a[1].value) {
      this.setState({ NODE: <Navigate to="/page1" replace={true} /> })
    } else {
      console.log('入力してください');
    }
  }


  componentDidMount() {
    console.log('渡された' + this.props.name);
    $('button').on('click', (e) => {
      console.log(e);
      e.preventDefault()
      this.setState({ NODE: <Navigate to="/aaaa" replace={true} /> })
    })
    // history.replaceState(null, null, null);
    window.addEventListener('popstate', function (e) {
      console.log(history);
      history.pushState(null, null, null);
      // alert('ブラウザバックを検知しました。');
    });
  }




  render() {
    return (
      <div className="reactApp" id='a'>
        {this.state.NODE}<br />あsdfgh
        <label><input type="checkbox" id="blocker" /> block</label>
        <input type="text" name="username" id="name" />
        <input type="password" name="password" />
        <input type="submit" value="送信" onClick={(e) => { this.check(e) }} />
        <HashLink smooth to="/#piyo">
          fugaページのidがpiyoの要素に移動できる例(ページ内遷移)
        </HashLink>
        <div>{this.state.path}</div>
        <div>{location.pathname}</div>
        <button type="submit" >trtgdc</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="piyo">aaaaaaaa</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </div>
    )
  }
}