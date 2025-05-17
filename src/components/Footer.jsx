
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} Manish Portfolio 2025
      </p>
    </footer>
  );
};

const styles = {

  footer: {
    backgroundColor: '#0f111a',
    color: '#ccc',
    textAlign: 'center',
    padding: '1.5rem 0',
    borderTop: '1px solid #222',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.95rem',
    marginTop: '0.125rem',
  },
  text: {
    margin: 0,
  }
};

export default Footer;
