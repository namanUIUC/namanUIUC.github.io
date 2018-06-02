---
layout: post
title: "WILLOW Code - Decoding (winner of Youtube 8m challenge)"
date: 2018-05-30
excerpt: "Understanding what changes team WILLOW have made in their final code."
tags: [Vision]
mathjax: true
mathjax_autoNumber: true
---

## Changes that they have made in the starter code

> **Note** : I would recommend to open both the repositories : [WILLOW](https://github.com/antoine77340/Youtube-8M-WILLOW) and [GOOGLE (starter code)](https://github.com/google/youtube-8m) side by side to see the changes that they have made in the code. Also, read the [paper](https://arxiv.org/abs/1706.06905) that they have published in the CVPR 2017. 

I have documented the changes that they have made in the started code to reverse engineer their implementation. All the references given below are with respect to the GOOGLE - starter code. 

### Files that are not changed

These are the files that are not changed:

- `readers.py`
- `models.py`
- `model_utils.py`
- `mean_average_precision_calculator.py`
- `export_model.py`
- `eval_util.py`
- `convert_prediction_from_json_to_csv.py`
- `cloudml-gpu.yaml`
- `cloudml-gpu-distributed.yaml`
- `average_precision_calculator.py`

### Files that are deleted

Only one file that is deleted : `cloudml-4gpu.yaml`

### Files that are added

Only one file that they have created : `file_averaging.py`

### Files that are modified

I have sub divided the changes into two categories : **Major changes** (involving models) and **Utility  changes**

#### Major Changes

These are the files that contains the model and have been changed heavily.

-  `video_level_model.py`
  - Description of the changes : TODO
- `frame_level_model.py`
  - Description of the changes : TODO

#### Utility Changes

Here is the list of all the files that they have changed according to their utility.

- `utils.py`
  - Deleted line 22 - 25.
  - Added two more functions : `clip_grad_norms` and `combine_gradients`
- `train.py`
  - Changed the training flag : removed number of GPU's
  - Tuned Hyperparametes:
    - base learning rate : 0.1 to 0.01
    - decay : 0.9 to 0.95
    - epochs : 5 to 15
    - model steps : 1000 to 10000
  - Changed build_graph method : removed lines 224 - 236 and major changes 260 - 330.
  - Changes in trainer method : 
    - changes in line 360.
    - uncommented the lines 369 - 371.
    - deleted the lines 382 - 406.
    - moved line 446 inside the if condition.
    - changed else condition line 485 - 487.
- `losses.py`
  - Changed the imports.
  - Additional flag for alpha.
  - Used that alpha in cross_entropy - calculate_loss method.
  - Deleted rest of the code.
- `inference.py`
  - Manipulated the flags.
  - Some changes in the lines 125 - 140.
  - Remove lot of junk code in the main method.
- `eval.py`
  - Removed lines 16, 17 and 18.
  - Added flags : lines 36 - 55
  - Removed method get_dataset_checkpoints
  -  Initialized checkpoints : changed line 196
  - Removed json lines 282 - 287

### Summary of changes 