import React from 'react';

import './Menu.scss';
import logo from '../../../assets/images/logo.png';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <nav className={'navbar'}>
      <ul
        className={'navbar__menu'}>
        {this.renderList()}
      </ul>
    </nav>
  }

  renderList() {
    const lis = [];
    this.props.options.forEach((option, ind) => {
      lis.push(
        this.renderItem(option),
      );
      if (Math.ceil(this.props.options.length / 2) === ind + 1) {
        lis.push(
          this.renderLogo(),
        )
      }
    });
    return lis;
  }

  renderItem(option) {
    return <li className={'navbar__menu__item'}>
      <a href={option.href} className='navbar__menu__item_link'>
        <span>{option.title}</span>
      </a>
    </li>

  }

  renderLogo() {
    return <li className={'navbar__menu__item'}>
      <a href='#' className='navbar__menu__item_link'>
        <span className={'navbar__menu__item_logo'}>
          <img src={logo} alt={'logo'} />
        </span>
      </a>
    </li>

  }
}