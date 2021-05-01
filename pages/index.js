import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <body className={styles.body}>
      <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
          <div className={styles.logincard}>
            <div className="row no-gutters">
              <div className="col-md-5">
                <img src="/login.jpg" alt="login" className={styles.loginimg} />
              </div>
              <div className="col-md-7">
                <div className={styles.cardbody}>
                  <div className={styles.brandwrapper}>
                    <img
                      src="/logo.svg"
                      alt="logo"
                      className={styles.brandwrapper}
                    />
                  </div>
                  <p className={styles.logincarddescription}>
                    Sign into your account
                  </p>
                  <form action="#!">
                    <div className={styles.formgroup}>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className={styles.formgroup}
                        placeholder="Email address"
                      />
                    </div>
                    <div className={styles.formgroup} md={4}>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="***********"
                      />
                    </div>
                    <input
                      name="login"
                      id="login"
                      //buton
                      className={styles.loginbtn}
                      mb={4}
                      type="button"
                      value="Login"
                    />
                  </form>
                  <a href="#!" className={styles.forgotpasswordlink}>
                    Forgot password?
                  </a>
                  <p className={styles.logincardfootertext}>
                    Don't have an account?
                    <a href="#!" className="text-reset">
                      Register here
                    </a>
                  </p>
                  <nav className="login-card-footer-nav">
                    <a href="#!">Terms of use.</a>
                    <a href="#!">Privacy policy</a>
                  </nav>
                </div>
              </div>
              <div className="col-md-7"></div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
