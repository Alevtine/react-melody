import React from 'react';
import Welcome from './components/welcome';
import Footer from './components/footer';


  class App extends React.Component {
    state = {
      isNext: false
    }
    render() {
      return (
        <section>
          <Welcome />
          <Footer />
        </section>
      )
    }
}

  export default App;
