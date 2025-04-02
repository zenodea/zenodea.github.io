---
title: "Blog"
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

  .posts__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .post-card {
    background: #2d3748;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border: 1px solid #4a5568;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
  }

  .post-card:hover {
    transform: translateY(-5px);
  }

  .post-card__image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-bottom: 1px solid #4a5568;
  }

  .post-card__content {
    padding: 0.5rem 1rem;
  }

  .post-card__content--with-image {
    padding: 1rem;
  }

  .post-card__category {
    display: inline-block;
    background: #1a202c;
    color: #63b3ed;
    padding: 0.2rem 0.6rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    border: 1px solid #4a5568;
  }

  .post-card__title {
    color: #e2e8f0;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .post-card__excerpt {
    color: #cbd5e0;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .post-card__meta {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #a0aec0;
    font-size: 0.8rem;
  }

  .post-card__meta i {
    margin-right: 0.3rem;
  }

  .section-divider {
    border: none;
    border-top: 2px solid #4a5568;
    margin: 2rem 0;
  }

  .category-section {
    margin-bottom: 2rem;
    background: #1a202c;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .category-title {
    color: #e2e8f0;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .category-description {
    color: #cbd5e0;
    text-align: center;
    max-width: 600px;
    margin: 0 auto 1.5rem;
    font-size: 1.1rem;
  }

  .load-more-btn {
    display: block;
    margin: 2rem auto 0;
    padding: 0.8rem 2rem;
    background: #2d3748;
    color: #63b3ed;
    border: 1px solid #4a5568;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
  }

  .load-more-btn:hover {
    background: #4a5568;
    transform: translateY(-2px);
  }

  .hidden {
    display: none;
  }

  .fade-in {
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    .posts {
      padding: 1rem;
    }
    
    .category-section {
      padding: 1rem;
    }
  }
</style>

<div class="posts">
  {% include group-by-array collection=site.posts field="categories" %}
  {% for category in group_names %}
    {% assign posts = group_items[forloop.index0] %}
    <div class="category-section">
      <h2 class="category-title">{{ category }}</h2>
      <p class="category-description">
        {% case category %}
          {% when 'Programming' %}
            Dive into the world of programming with tutorials, tips, and best practices.
          {% when 'Technology' %}
            Explore the latest in technology trends, innovations, and digital transformation.
          {% when 'Personal' %}
            Personal insights, experiences, and thoughts on various topics.
          {% else %}
            Articles and insights about {{ category }}.
        {% endcase %}
      </p>
      <div class="posts__grid">
        {% for post in posts %}
          <article class="post-card {% if forloop.index > 4 %}hidden{% endif %} {% if forloop.index > 4 and forloop.index <= 8 %}fade-in{% endif %}">
            {% if post.header.image %}
              <img class="post-card__image" src="{{ post.header.image | relative_url }}" alt="{{ post.title }}">
            {% endif %}
            <div class="post-card__content {% if post.header.image %}post-card__content--with-image{% endif %}">
              <h3 class="post-card__title">
                <a href="{{ post.url | relative_url }}" style="color: inherit; text-decoration: none;">{{ post.title }}</a>
              </h3>
              <p class="post-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
              <div class="post-card__meta">
                <span><i class="far fa-calendar"></i>{{ post.date | date: "%B %d, %Y" }}</span>
              </div>
              <br>
              <div class="post-card__category">{{ category }}</div>
            </div>
          </article>
        {% endfor %}
      </div>
      {% if posts.size > 4 %}
        <button class="load-more-btn" onclick="loadMore(this, '{{ category }}')">Load More Posts</button>
      {% endif %}
    </div>
    {% unless forloop.last %}
      <hr class="section-divider">
    {% endunless %}
  {% endfor %}
</div>

<script>
function loadMore(button, category) {
  const categorySection = button.closest('.category-section');
  const hiddenPosts = categorySection.querySelectorAll('.post-card.hidden');
  const fadeInPosts = categorySection.querySelectorAll('.post-card.fade-in');
  
  // Show next 4 hidden posts
  hiddenPosts.forEach((post, index) => {
    if (index < 4) {
      post.classList.remove('hidden');
      post.classList.add('fade-in');
    }
  });
  
  // Remove fade-in class from posts that were just shown
  fadeInPosts.forEach(post => {
    post.classList.remove('fade-in');
  });
  
  // Hide button if no more posts to show
  if (hiddenPosts.length <= 4) {
    button.style.display = 'none';
  }
}
</script>
