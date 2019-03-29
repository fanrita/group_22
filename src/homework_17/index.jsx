import React from 'react';
import ReactDOM from 'react-dom';
import './homework_17.scss';
import { Button } from './components/Button.jsx';
import { DropDown } from './components/DropDown.jsx';
import { Menu } from './components/Menu.jsx';

const countries = [
  {
    title: 'USA',
  },
  {
    title: 'Canada',
  },
  {
    title: 'Germany',
  },
];

const menuOptions = [
  {
    title: 'So funktioniert',
    href: 'google.com',
  },
  {
    title: 'Unser Sortiment',
    href: 'google.com',
  },
  {
    title: 'Unsere App',
    href: 'google.com',
  },
  {
    title: 'Häufige Fragen',
    href: 'google.com',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Test',
    };
  }

  render() {
    return <div>
      <Menu options={menuOptions} />
      <div className={'page-content'}>
        <input type="text" />
        <Button title={this.state.title} onClick={() => this.setState({ title: 'Changed title' })} className="asdas" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur enim autem porro eligendi, odit sit
          nesciunt sequi illo culpa quia veritatis ex minima, blanditiis optio quod asperiores, accusantium
          necessitatibus et.</p>
        <Button title='Hello' onClick={() => console.log('CLICKED OTHER')} />
        <DropDown options={countries} placeholder="Select country..." />
      </div>
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
)