---
layout: default
title: AkaneDev Labs
description: Independent software development. Building games, engines, tools, and software.
---

<section class="hero">

    <div class="hero-content">

        <h1>
            AkaneDevLabs
        </h1>

        <p class="hero-description">
            AkaneDev Labs is an independent software development company
            creating software, games, engines, and tools.
            Built with curiosity, engineered with purpose.
        </p>

        <div class="hero-actions">
            <a href="{{ '/products/' | relative_url }}" class="button button-primary">
                Explore our products <span aria-hidden="true">→</span>
            </a>

            <a href="{{ '/about/' | relative_url }}" class="button button-secondary">
                About the company
            </a>
        </div>

    </div>

    <div class="hero-decoration" aria-hidden="true">
        <div class="decoration-grid"></div>
        <span class="decoration-label">ADL / 2026</span>
        <span class="decoration-symbol">+</span>
    </div>

</section>


<section class="intro-section">

    <div class="section-heading">
        <span class="section-index">01 / INTRODUCTION</span>
        <h2>Technology for all.</h2>
    </div>

    <div class="intro-content">
        <p>
            We believe great products start with the community. Our goal is to take ideas that might seem a little strange on paper and turn them into things people can experience, use, and enjoy.
        </p>
    </div>

</section>


<section class="products-section">

    <div class="section-heading">
        <span class="section-index">02 / SELECTED WORK</span>

        <div class="section-heading-row">
            <h2>What we're building.</h2>

            <a href="{{ '/products/' | relative_url }}" class="text-link">
                All products <span aria-hidden="true">↗</span>
            </a>
        </div>
    </div>

    <div class="product-grid">

        {% assign featured_products = site.products | where: "featured", true %}

        {% for product in featured_products limit: 3 %}

            <a href="{{ product.url | relative_url }}" class="product-card">

                <div class="product-card-top">
                    {% if product.category %}
                        <span class="product-category">
                            {{ product.category }}
                        </span>
                    {% endif %}

                    <span class="product-arrow" aria-hidden="true">↗</span>
                </div>

                <h3>{{ product.title }}</h3>

                {% if product.description %}
                    <p>{{ product.description }}</p>
                {% endif %}

                <div class="product-card-bottom">
                    <span>Explore product</span>
                    <span aria-hidden="true">→</span>
                </div>

            </a>

        {% endfor %}

        {% if featured_products.size == 0 %}
            <div class="empty-products">
                <span class="empty-indicator"></span>
                <p>New projects are in development.</p>
            </div>
        {% endif %}

    </div>

</section>


<section class="closing-section">

    <span class="section-index">03 / GET IN TOUCH</span>

    <h2>Have something in mind?</h2>

    <p>
        Interested in our work, have a question, or want to get in touch?
        We'd be happy to hear from you.
    </p>

    <a href="mailto:labs@akanedev.au" class="button button-primary">
        Contact AkaneDev Labs <span aria-hidden="true">→</span>
    </a>

</section>