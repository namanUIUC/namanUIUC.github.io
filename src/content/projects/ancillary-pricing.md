---
title: "World's first dynamic pricing engine"
pubDate: 2019-06-15
tags: ["Aviation", "Pricing", "Data Science"]
image: "/portfolio/ancillary.png"
demoUrl: "https://flyr.com/resource-hub/unlocking-efficiency-and-revenue-deep-q-learning-with-batch-constraints/"
featured: true
---

# How We Taught Computers to Read Your Mind... For Baggage Fees

## Overview

Picture this: You're booking a flight, and just as you're about to click "purchase," the airline throws you a curveball—do you want to add a bag for $45? Now imagine if that same airline could somehow peek into your travel plans and realize you're going on a two-week European adventure (hello, heavy suitcase!) and offer that bag for $25 instead. That's exactly what we built with our contextual ML model for airline ancillaries. We created a system that provides dynamic pricing recommendations specific to each customer interaction and optimizes expected revenue per customer, improving conversion by 36% and revenue per offer by 10%. No mind-reading involved—just really, really smart algorithms that understand the difference between a weekend getaway and a month-long business trip.

## Challenges Addressed

Here's the dirty secret of airline ancillaries: airlines experience very low conversion rates (less than 5%) for ancillaries because they treat every passenger exactly the same. Imagine offering the same bag fee to a minimalist backpacker flying to Portland for the weekend and a family of five heading to Disney World. That's like trying to sell snow boots in Hawaii and flip-flops in Alaska—technically possible, but wildly inefficient. The real challenge wasn't just predicting who might buy a baggage upgrade; it was understanding the intricate dance between customer context, pricing psychology, and the dreaded "Add to Cart" button. Various ancillaries compete with each other's "shelf-space" on the website and wallet-share of the customer, so pricing an ancillary in the context of other ancillaries confounds the problem. It's like trying to juggle flaming torches while riding a unicycle—technically doable, but requiring extraordinary precision.

## Technical Approach

We built three increasingly sophisticated pricing models that would make even a casino's odds-makers jealous. First, the basic "Ancillary Purchase Prediction with Logistic Mapping" (APP-LM)—think of it as the training wheels version that uses good old Gaussian Naive Bayes to predict who might bite. Then came the "Ancillary Purchase Prediction with Exhaustive Search" (APP-DES), which unleashed deep neural networks to hunt through every possible price point like a bloodhound tracking a scent. Finally, our pièce de résistance: the "End-to-End DNN with Custom Loss Function" (DNN-CL), a single-stage neural network that simultaneously predicts AND prices in one beautiful, terrifying calculation. We developed a deep learning model that effectively estimates purchase probability and simultaneously prices the ancillary product, by modeling monotonicity properties of customers' willingness to pay. We fed this beast over 30 features including everything from "length of stay" to "time until departure" to "how popular baggage is on this route"—basically everything short of your coffee order preference.

## Impact

The results? Pure magic. Our model outperforms human rule-based approaches in an online setting by improving conversion by 36% and revenue per offer by 10%. To put this in perspective, when we deployed our APP-LM model alongside human-curated pricing and a random discount generator (yes, we literally had a computer throwing darts at a price board as a control), we didn't just win—we dominated. While random discounts managed a respectable 12.37% conversion rate compared to humans' 10.18%, our contextual model achieved 13.92% conversion while actually generating 10% MORE revenue per offer than the human system. It's like having your cake, eating it too, and somehow ending up with more cake than you started with. The airline industry collectively began wondering if they'd been doing pricing wrong this entire time (spoiler alert: they had).

## Technologies Used

Our tech stack read like a "who's who" of machine learning: deep neural networks with customized loss functions, stochastic gradient descent optimization, weighted cross-entropy for handling highly imbalanced data (remember, only 5% of people buy ancillaries), and NVIDIA Tesla K80 GPUs working overtime to crunch the numbers. We implemented discrete exhaustive search algorithms that could evaluate every legal price point faster than you can say "baggage fee," and created monotonicity constraints that respected the basic economic principle that people willing to pay $50 for something will probably also pay $30 for it. The system processed real-time booking data through sophisticated ensemble methods while maintaining customer privacy—no personal data required, just travel patterns and contextual clues.

## Our Team and Their Contributions

Our team was like the Avengers of airline pricing: data scientists wielding custom loss functions like Thor's hammer, machine learning engineers architecting neural networks that could process millions of booking sessions, and domain experts who understood that a Tuesday morning flight to Cleveland attracts very different customers than a Friday evening flight to Las Vegas. We had behavioral economists explaining why people make irrational decisions about baggage fees, software engineers building A/B testing frameworks that could handle real airli
