/* app.jsx — assembles the homepage */

const App = () => (
  <React.Fragment>
    <Header />
    <Hero />
    <PoliceStrength />
    <Services />
    <About />
    <Reasons />
    <SimulatorCTA />
    <Booking />
    <Contact />
    <InfoStrip />
    <Footer />
    <FloatingLineCTA />
  </React.Fragment>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
