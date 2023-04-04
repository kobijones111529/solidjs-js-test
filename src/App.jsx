import styles from './App.module.css';
import Form from './Form';

const App = () => {
  return (
    // <div class={styles.App}>
    //   <header class={styles.header}>
    //     <img src={logo} class={styles.logo} alt="logo" />
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to reload.
    //     </p>
    //     <a
    //       class={styles.link}
    //       href="https://github.com/solidjs/solid"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Solid
    //     </a>
    //   </header>
    // </div>
    <div class={styles.App}>
      <div id={styles.mainContainer}>
        <main id={styles.main}>
          <Form />
        </main>
      </div>
    </div>
  );
};

export default App;
