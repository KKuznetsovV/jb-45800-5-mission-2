import { useAppSelector } from '../../redux/hooks';
import Navbar from '../../components/navbar/Navbar';
import './HistoryPage.css';

function HistoryPage() {
  const { entries } = useAppSelector((state) => state.history);

  return (
    <div className="page" dir="rtl">
      <Navbar />
      <main className="history-main">
        <h1 className="page-title">היסטוריית חיפושים</h1>

        {entries.length === 0 ? (
          <div className="empty-history">
            <p>🔍 לא בוצעו חיפושים עדיין.</p>
            <p>חפש יישוב בדף הבית כדי להתחיל.</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="history-table">
              <thead>
                <tr>
                  <th>זמן החיפוש</th>
                  <th>שם היישוב</th>
                  <th>מדינה</th>
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
    </div>
  );
}

export default HistoryPage;
