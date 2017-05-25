import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormattedMessage
          id={ 'Header.greeting' }
          defaultMessage={ 'Welcome to your dashboard, {name}!' }
          values={{ name: "Matt" }}
        />
      </div>
    );
  }
}

export default App;
