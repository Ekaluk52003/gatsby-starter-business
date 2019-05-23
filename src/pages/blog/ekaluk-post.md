---
templateKey: article-page
title: คำยืนยันจากลูกค้า
slug: คำยืนยันจากลูกค้า
date: 2019-05-20T16:17:32.557Z
cover: /img/screenshot.jpg
tags:
  - mill
meta_title: adadasd
meta_description: adsas
---


You need to understand that a Git repository is not just a tree of directories and files, but also stores a history of those trees - which might contain branches and merges.



When fetching from a repository, you will copy all or some of the branches there to your repository. These are then in your repository as "remote tracking branches", e.g. branches named like remotes/origin/master or such.



Fetching new commits from the remote repository will not change anything about your local working copy.

Your working copy has normally a commit checked out, called HEAD. This commit is usually the tip of one of your local branches.

I think you want to update your local branch (or maybe all the local branches?) to the corresponding remote branch, and then check out the latest branch.

To avoid any conflicts with your working copy (which might have local changes), you first clean everything which is not versioned (using git clean). Then you check out the local branch corresponding to the remote branch you want to update to, and use git reset to switch it to the fetched remote branch. (git pull will incorporate all updates of the remote branch in your local one, which might do the same, or create a merge commit if you have local commits.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/AlBSndVYaMQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

(But then you will really lose any local changes - both in working copy and local commits. Make sure that you really want this - otherwise better use a new branch, this saves your local commits. And use git stash to save changes which are not yet committed.)
