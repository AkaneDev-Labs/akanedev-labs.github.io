---
layout: page
title: Products
description: Software, games, tools, and other things developed by AkaneDev Labs.
permalink: /products/
eyebrow: CATALOGUE
---

<div class="products-list">

    {% assign products = site.products | sort: "title" %}

    {% if products.size > 0 %}

        {% for product in products %}

            <a href="{{ product.url | relative_url }}" class="catalogue-product">

                <div class="catalogue-product-info">

                    {% if product.category %}
                        <span class="product-category">
                            {{ product.category }}
                        </span>
                    {% endif %}

                    <h2>{{ product.title }}</h2>

                    {% if product.description %}
                        <p>{{ product.description }}</p>
                    {% endif %}

                </div>

                <span class="catalogue-product-arrow" aria-hidden="true">
                    →
                </span>

            </a>

        {% endfor %}

    {% else %}

        <p class="empty-products">
            Nothing here just yet. New projects are in development.
        </p>

    {% endif %}

</div>