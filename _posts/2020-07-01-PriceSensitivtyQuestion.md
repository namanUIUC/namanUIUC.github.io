---
layout: post
title: "Learning Price Sensitivity"
date: 2020-07-01
excerpt: "Help me find out which loss function is appropriate"
tags: [Revenue Management, Pricing, Thought Experiment, Neural Networks]
mathjax: true
mathjax_autoNumber: true
---

Imagine you are a data scientist and you are given a task to build a model that replicates customer behavior in market. The task of the customer model is simple: *Given the information about the product and its price, predict the probability of purchase*. For example, if the product is an apple :apple: with color red, from Arkansas, 10 days old with a price $5 and so on, then customer model should predict the probability of purchase. You have the access to data that is required to build a model. Meaning, you have many customer - seller transactions from various sources available to you with the ground truth of whether the customer bought or not.

After some time, you've built a prediction model using neural networks with cross entropy loss that beats all the previous baselines :rocket: Then, an economist introduces you to a commonly used concept called [price sensitivity](https://www.investopedia.com/terms/p/price-sensitivity.asp) (i.e. probability of purchase should decrease with the increase in price and for decrease in price, the probability of purchase should increase). You are almost certain that if your model incorporates this prior knowledge of price sensitivity, then the model will become realistic :sparkles:


Now, you are in a quest for introducing price sensitivity to the neural network under the following setting

**Setting**: Below are two 2-D loss [contours](https://www.statisticshowto.com/contour-plots/) for two potential loss functions for incorporating price sensitivity. The x-axis is the change (delta) in price of the product and y-axis is the change (delta) in prob of purchase. Blue color corresponds to low value and red color corresponds to high value. The loss value is plotted in these contour plots in log scale.


<center>
<img class="image image--md" src="../../../assets/images/posts/price_sensitivity/1.png" style="width:45%"/>
</center>

<center>
<em>Figure 1: Loss contour 1</em>
</center>
<br/>
<center>
<img class="image image--md" src="../../../assets/images/posts/price_sensitivity/2.png" style="width:45%"/>
</center>

<center>
<em>Figure 2: Loss contour 2</em>
</center>


**Question**: Without knowing the actual loss function, which of the two functions can be used to learn the [price sensitivity](https://www.investopedia.com/terms/p/price-sensitivity.asp) effectively?

> **Note**: The customer can not change the price of the product. The product price is decided by the seller.  