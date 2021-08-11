import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { createGlobalStyle } from 'styled-components';
import ThemeCollection from '../themes/Themes.js';

const ThemeBar = ({active, onClick}) => {
  const options = Object.keys(ThemeCollection).map(
    (key) => (
      <Dropdown.Item 
        as="button" 
        key={key} 
        onClick={() => onClick(key)}
        active={key === active}
      >
        {key}
      </Dropdown.Item>
    )
  );
  return (
    <div className="theme-panel">
      <DropdownButton 
        as="ButtonGroup" 
        variant="primary"
        title={active}>
        {options}
      </DropdownButton>
    </div>
  );
}

class ThemeSelector extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      themeName: 'Ocean'
    };
  }

  changeTheme(themeName) {
    this.setState({
      themeName: themeName
    });
  }

  render() {
    const theme = ThemeCollection[this.state.themeName];
    const GlobalStyle = createGlobalStyle(theme);
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeBar active={this.state.themeName} onClick={(selected) => this.changeTheme(selected)} />
      </React.Fragment>
    );
  }
}

export default ThemeSelector;

