---
layout: page
title: People
permalink: /people/
# description: People I have worked with, learned from, advised, and mentored.
nav: true
nav_order: 5
---

{% include people.liquid %}

<style>
  .people-section {
    margin: 2.25rem 0 2.75rem;
  }

  .people-section:first-child {
    margin-top: 0.75rem;
  }

  .people-section-description {
    max-width: 52rem;
    margin-top: -0.35rem;
    margin-bottom: 1.15rem;
    color: var(--global-text-color-light);
  }

  .people-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .person-card {
    padding: 1rem 1.05rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.75rem;
    background: var(--global-card-bg-color);
  }

  .person-card-header {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
  }

  .person-photo,
  .person-avatar {
    width: 3.5rem;
    height: 3.5rem;
    flex: 0 0 3.5rem;
    border-radius: 50%;
  }

  .person-photo {
    object-fit: cover;
    border: 1px solid var(--global-divider-color);
  }

  .person-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--global-theme-color);
    color: var(--global-theme-color);
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  .person-heading {
    min-width: 0;
  }

  .person-name {
    margin: 0 0 0.1rem;
    font-size: 1.05rem;
    line-height: 1.25;
  }

  .person-name a {
    color: var(--global-text-color);
  }

  .person-name a:hover {
    color: var(--global-theme-color);
  }

  .person-relationship {
    color: var(--global-theme-color);
    font-size: 0.86rem;
    font-weight: 700;
  }

  .person-affiliation,
  .person-period {
    color: var(--global-text-color-light);
    font-size: 0.82rem;
    line-height: 1.35;
  }

  .person-description {
    margin-top: 0.8rem;
    font-size: 0.92rem;
    line-height: 1.5;
  }

  .person-description p:last-child {
    margin-bottom: 0;
  }

  .person-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.8rem;
  }

  .person-links a {
    display: inline-block;
    padding: 0.14rem 0.5rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    font-size: 0.74rem;
    font-weight: 700;
  }

  .person-links a:hover {
    border-color: var(--global-theme-color);
  }

  @media (max-width: 767.98px) {
    .people-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
