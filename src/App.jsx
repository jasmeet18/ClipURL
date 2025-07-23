import { useState } from 'react';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = () => {
    if (!longUrl.trim()) {
      alert('Please enter a URL');
      return;
    }
    const fakeShort = 'https://sho.rt/' + Math.random().toString(36).substring(7);
    setShortUrl(fakeShort);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔗 URL Shortener</h2>
        <input
          type="text"
          placeholder="Paste your long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleShorten} style={styles.button}>
          Shorten URL
        </button>

        {shortUrl && (
          <div style={styles.resultBox}>
            <p style={styles.resultLabel}>Your short URL:</p>
            <a
              href={longUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.shortLink}
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f4f6f8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '15px',
    outline: 'none',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '8px',
    backgroundColor: '#4f46e5',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  resultBox: {
    marginTop: '20px',
    backgroundColor: 'lightblue',
    padding: '15px',
    borderRadius: '8px',
    border: '1px dashed #4f46e5',
  },
  resultLabel: {
    marginBottom: '8px',
    color: '#333',
    fontWeight: 'bold',
  },
  shortLink: {
    fontSize: '18px',
    color: '#1e3a8a',
    textDecoration: 'none',
    wordBreak: 'break-word',
  },
};

export default App;
