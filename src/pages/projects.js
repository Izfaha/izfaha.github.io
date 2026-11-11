import React from 'react';
import Layout from '@theme/Layout';
import styles from './projects.module.css';

const projects = [
  {
    title: 'DevOps Homelab',
    description: 'Eksperimen Linux, Docker, dan layanan dalam homelab.',
    tags: ['Linux', 'Docker'],
    link: 'https://github.com/Izfaha',
  },
  {
    title: 'CI/CD Pipeline',
    description: 'Otomatisasi build, pengujian, dan deployment aplikasi.',
    tags: ['CI/CD', 'DevOps'],
    link: 'https://github.com/Izfaha',
  },
];

export default function Projects() {
  return (
    <Layout title="Projects" description="Projects by Izfaha">
      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <p className={styles.eyebrow}>WHAT I BUILD</p>
            <h1>Projects</h1>
            <p>Catatan proyek dan eksperimen yang aku kerjakan.</p>
          </header>

          <div className={styles.grid}>
            {projects.map((project) => (
              <article className={styles.card} key={project.title}>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Lihat proyek →
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}