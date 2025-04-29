import React, { useRef, useEffect } from 'react';

const ContactForm = ({ onClose }) => {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;

    const handleSubmit = (e) => {
      e.preventDefault();

      fetch('https://script.google.com/macros/s/AKfycbxv3YRK_arEBOdIZpsNgqGXUUdhV03yoYhalc1ix7Nfw9VQ1m3M_-Uf-vfjKyGsXrMt/exec', {
        method: 'POST',
        body: new FormData(form),
      })
        .then((response) => {
          alert('Thank you! Form is submitted');
          onClose(); // Close modal
        })
        .catch((error) => console.error('Error!', error.message));
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, [onClose]);

  // Inline styles for modal
  const styles = {
    backdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '8px',
      width: '90%',
      maxWidth: '500px',
      position: 'relative',
    },
    closeBtn: {
      position: 'absolute',
      top: '10px',
      right: '15px',
      border: 'none',
      background: 'none',
      fontSize: '20px',
      cursor: 'pointer',
    },
    input: {
      display: 'block',
      width: '100%',
      marginBottom: '10px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>
          &times;
        </button>
        <h4>Contact Us</h4>
        <form ref={formRef} name="contact-form">
          <input type="text" name="name" placeholder="Name" required style={styles.input} />
          <input type="text" name="number" placeholder="Number" required style={styles.input} />
          <input type="email" name="email" placeholder="Email" required style={styles.input} />
          <textarea name="message" rows="5" placeholder="Your Message" required style={styles.input} />
          <input type="submit" value="Submit" style={{ ...styles.input, backgroundColor: '#22c55e', color: '#fff', cursor: 'pointer' }} />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;