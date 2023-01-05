import styles from './auth.module.scss';
import resetImg from '../../assets/forgot.png';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="Login" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset de senha</h2>

          <form>
            <input type="text" placeholder="Email" required />
            <button className="--btn --btn-primary --btn-block">
              Reset de senha
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/login">Login</Link>
              </p>
              <p>
                <Link to="/register">Registrar</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
