import Navbar from '../../components/navbar/Navbar';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="page" dir="rtl">
      <Navbar />
      <main className="about-main">
        <h1 className="page-title">אודות</h1>

        <div className="about-content">
          <section className="about-card">
            <h2>🌍 אודות האתר</h2>
            <p>
              אתר מזג האוויר בישראל מאפשר לכם לצפות במזג האוויר הנוכחי בכל
              יישוב בישראל בלחיצה אחת.
            </p>
            <p>
              בחרו יישוב מתיבת הבחירה בדף הבית וקבלו מיד מידע עדכני כולל
              טמפרטורה, תיאור מזג האוויר ומהירות הרוח.
            </p>
            <p>
              רשימת היישובים מתעדכנת ממאגרי המידע הממשלתיים הפתוחים, ומידע
              מזג האוויר מסופק על ידי{' '}
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
            <h2>👤 אודות המפתח</h2>
            <div className="developer-photo-wrapper">
              <img src="/student_photo.jpeg" alt="תמונת הסטודנט" className="developer-photo" />
            </div>
            <ul className="developer-info">
              <li>
                <strong>שם:</strong> Kirill Kuznetsov
              </li>
              <li>
                <strong>קורס:</strong> jb-45800-5
              </li>
              <li>
                <strong>מוסד:</strong> ג'ון ברייס הדרכה
              </li>
              <li>
                <strong>טכנולוגיות:</strong> React, TypeScript, Redux Toolkit,
                Vite
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
