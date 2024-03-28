import React from 'react';
import styles from './loader.module.css'; // Import CSS module

const Loader = () => {
  return (
    <main>
      <div className={styles.loader}> {/* Use CSS module class name */}
        <div className={`${styles.box} ${styles.box0}`}> {/* Use CSS module class name */}
          <div></div>
        </div>
        <div className={`${styles.box} ${styles.box1}`}> {/* Use CSS module class name */}
          <div></div>
        </div>
        <div className={`${styles.box} ${styles.box2}`}> {/* Use CSS module class name */}
          <div></div>
        </div>
        <div className={`${styles.box} ${styles.box3}`}> {/* Use CSS module class name */}
          <div></div>
        </div>
        <div className={`${styles.box} ${styles.box4}`}> {/* Use CSS module class name */}
          <div></div>
        </div>
        <div className={`${styles.box} ${styles.box5}`}> {/* Use CSS module class name */}
          <div></div>
        </div>
        <div className={`${styles.box} ${styles.box6}`}> {/* Use CSS module class name */}
          <div></div>
        </div>
        <div className={`${styles.box} ${styles.box7}`}> {/* Use CSS module class name */}
          <div></div>
        </div>
        <div className={styles.ground}> {/* Use CSS module class name */}
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Loader;
