---
title: "Blog Posts"
permalink: /posts/
layout: single
author_profile: true
classes: wide
---

<style>
  .posts {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .posts__header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .posts__title {
    color: #e2e8f0;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .posts__description {
    color: #cbd5e0;
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .posts__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .post-card {
    background: #2d3748;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border: 1px solid #4a5568;
    overflow: hidden;
    transition: transform 0.2s;
  }

  .post-card:hover {
    transform: translateY(-5px);
    background: #1a202c;
  }

  .post-card__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #4a5568;
  }

  .post-card__content {
    padding: 1.5rem;
  }

  .post-card__category {
    display: inline-block;
    background: #1a202c;
    color: #63b3ed;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    border: 1px solid #4a5568;
  }

  .post-card__title {
    color: #e2e8f0;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .post-card__excerpt {
    color: #cbd5e0;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .post-card__meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #a0aec0;
    font-size: 0.9rem;
  }

  .post-card__meta i {
    margin-right: 0.3rem;
  }

  .section-divider {
    border: none;
    border-top: 2px solid #4a5568;
    margin: 3rem 0;
  }

  .category-section {
    margin-bottom: 3rem;
  }

  .category-title {
    color: #e2e8f0;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    .posts {
      padding: 1rem;
    }
  }
</style>

<div class="posts">
  <div class="posts__header">
    <h1 class="posts__title">Blog Posts</h1>
    <p class="posts__description">Thoughts, research, and insights on information security, cryptography, and technology.</p>
  </div>

  {% include group-by-array collection=site.posts field="categories" %}

  {% for category in group_names %}
    {% assign posts = group_items[forloop.index0] %}
    <div class="category-section">
      <h2 class="category-title">{{ category }}</h2>
      <div class="posts__grid">
        {% for post in posts %}
          <article class="post-card">
            {% if post.header.image %}
              <img src="{{ post.header.image }}" alt="{{ post.title }}" class="post-card__image">
            {% endif %}
            <div class="post-card__content">
              <div class="post-card__category">{{ category }}</div>
              <h3 class="post-card__title">
                <a href="{{ post.url | relative_url }}" style="color: inherit; text-decoration: none;">{{ post.title }}</a>
              </h3>
              <p class="post-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
              <div class="post-card__meta">
                <span><i class="far fa-calendar"></i>{{ post.date | date: "%B %d, %Y" }}</span>
                {% if post.read_time %}
                  <span><i class="far fa-clock"></i>{{ post.read_time }} min read</span>
                {% endif %}
              </div>
            </div>
          </article>
        {% endfor %}
      </div>
    </div>
    {% unless forloop.last %}
      <hr class="section-divider">
    {% endunless %}
  {% endfor %}
</div>
