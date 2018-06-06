---
layout: post
title: "Mixture of Experts is 25 year old !!"
date: 2018-05-30
excerpt: "A comprehensive history of mixture of experts concept (est. 1991)"
tags: [Vision]
mathjax: true
mathjax_autoNumber: true
---

Based on the divide-and-conquer principle, mixture of experts (ME) trains individual models to become experts in different regions of the feature space. This idea was first proposed by [Jacobs el al.](https://www.researchgate.net/profile/Robert_Jacobs9/publication/233806999_Adaptive_Mixture_of_Local_Expert/links/0deec525e91d9c1a87000000/Adaptive-Mixture-of-Local-Expert.pdf) in 1991. Here's a little investigation of this legendary concept. 

 

# An Overview : Mixture of Experts (MoE)

The idea is to train many NN to have a group such that each of them specializes in a different part of the data. That is, if we assume that a dataset comes from a number of different regimes and we train a system in which one NN will specialize in one of the regimes and manager NN will look at the input data and assign a specific (specialized) NN for that computation.   

> **Note**: This kind of system doesn't make very efficient use of the data as the data is fractionated over all these different experts. So with small datasets, we can't expect to do very well. On the other hand, this is very good for very large datasets. 

In `boosting`, the weights on the model are not all equal, but after we finish training, each model has the same weight for each test case. We don't make the weights of individual model depend on which particular case we're dealing with. In `MoE` we do ! 

## Concept

> **Idea** : We can look at the input data for the particular case (during both training and testing) to help us decide on which model we can rely on. During training, this will allow models to specialize on a subset of the cases. They **do not learn** on the cases for which they are not picked. This will lead to a model that is very good at something but very bad at other things. 

The key idea is to make each expert focus on predicting the right answer for the cases where it is already doing better than the other experts. 

## Spectrum of models

| Very local models      | Fully global models |
| ---------------------- | ------------------- |
| Ex - Nearest Neighbors | Regression          |

In between the above models, we have multiple models which have intermediate complexity. This is good if the dataset have different regimes and these regimes have different input-output relationships. So we have this problem: if we are gonna use different models for different regimes, how do we partition dataset into these regimes ?

### Partitioning

TODO

# Fundamentals of Mixture of Experts

The original ME model introduced by Jacobs et al. can be viewed as a tree-structured architecture, based on the principle of divide and conquer, having three main components: several experts that are either regression functions or classifiers; a gate that makes soft partitions of the input space and defines those regions where the individual expert opinions are trustworthy; and a probabilistic model to combine the experts and the gate. The model is a weighted sum of experts, where the weights are the input-dependent gates. In this simplified form, the original ME model has three important properties: 1) it allows the individual experts to specialize on smaller parts of a larger problem; 2) it uses soft partitions of the data; and 3) it allows the splits to be formed along hyperplanes at arbitrary orientations in the input space. 

## Math behind the concept

TODO
