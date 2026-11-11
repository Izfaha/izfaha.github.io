import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout title="About Me" description="About Izfaha">
      <main className={styles.page}>
        <div className="container">
          <section className={styles.intro}>
            <p className={styles.eyebrow}>HELLO, I'M IZFAHA</p>
            <h1>About Me</h1>
            <p>
              Aku mahasiswa yang fokus belajar DevOps, Linux, dan keamanan
              sistem. Di situs ini aku mendokumentasikan hal-hal yang
              kupelajari dan proyek yang kukerjakan.
            </p>
          </section>

          <section className={styles.section}>
            <h2>What I’m learning</h2>
            <ul>
              <li>Linux dan administrasi server</li>
              <li>Docker dan deployment aplikasi</li>
              <li>CI/CD dan otomatisasi infrastruktur</li>
              <li>Keamanan sistem dan DevSecOps</li>
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}