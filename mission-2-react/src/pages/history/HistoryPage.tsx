import { useAppSelector } from '../../redux/hooks';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './HistoryPage.css';

function HistoryPage() {
  const { entries } = useAppSelector((state) => state.history);

  return (
    <div className="page">
      <Navbar />
      <main className="history-main">
        <h1 className="page-title">Search History</h1>

        {entries.length === 0 ? (
          <div className="empty-history">
            <p>🔍 No searches yet.</p>
            <p>Search for a location on the Home page to get started.</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.timestamp}</td>
                    <td>{entry.localityName}</td>
                    <td>{entry.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default HistoryPage;
