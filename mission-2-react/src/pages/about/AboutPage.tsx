import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="page">
      <Navbar />
      <main className="about-main">
        <h1 className="page-title">About</h1>

        <div className="about-content">
          <section className="about-card">
            <h2>🌍 About the Site</h2>
            <p>
              Israel Weather lets you view the current weather for any locality
              in Israel with a single click.
            </p>
            <p>
              Choose a locality from the dropdown on the Home page to instantly
              get up-to-date information including temperature, weather
              description, and wind speed.
            </p>
            <p>
              The locality list is sourced from open government data, and
              weather data is provided by{' '}
              <a
                href="https://www.weatherapi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                WeatherAPI
              </a>
              .
            </p>
          </section>

          <section className="about-card">
            <h2>👤 About the Developer</h2>
            <div className="developer-photo-wrapper">
              <img src="/student_photo.jpeg" alt="Student photo" className="developer-photo" />
            </div>
            <ul className="developer-info">
              <li>
                <strong>Name:</strong> Kirill Kuznetsov
              </li>
              <li>
                <strong>Course:</strong> jb-45800-5
              </li>
              <li>
                <strong>Technologies:</strong> React, TypeScript, Redux Toolkit,
                Vite
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
