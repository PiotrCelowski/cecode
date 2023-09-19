import styles from './Form.module.css';

export default function Form() {
    return (
        <div className={styles.background}>
            <div className={styles.section}>
                <div className={styles.title}>
                    <h1>Zostaw wiadomość</h1>
                    <p>Odpowiadamy w ciągu 24 godzin.</p>
                </div>
                <form className={styles.form_container}>
                    <div className={styles.form_field}>
                        <h2>Name</h2>
                        <label htmlFor='name'></label>
                        <input type='text' id='name'></input>
                    </div>
                    <div className={styles.form_field}>
                        <h2>Email</h2>
                        <label htmlFor='email'></label>
                        <input type='email' id='email'></input>
                    </div>
                    <div className={styles.form_field}>
                        <h2>Phone</h2>
                        <label htmlFor='phone'></label>
                        <input type='tel' id='phone'></input>
                    </div>
                    <div className={`${styles.form_field} ${styles.form_message}`}>
                        <h2>Message</h2>
                        <label htmlFor='message'></label>
                        <input type='text' id='message'></input>
                    </div>
                    <button>
                        Wyślij
                    </button>
                </form>
            </div>
        </div>
    );
  };