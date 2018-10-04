import React from 'react';

import Footer from './components/footer.jsx';
import SectionMain from './components/section-main.jsx';


class App extends React.Component {
  render() {
    return (
      <section>
        <SectionMain />
        <Footer />
      </section>
    );
  }
}

export default App;
