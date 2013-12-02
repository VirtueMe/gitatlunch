---
author: Benny Thomas
title: Git at lunch
---
= id="Welcome"

# GIT

<br>

## At lunch - distributed
<br>

> Benny Thomas @ Sandviks AS

> Github@VirtueMe

> Twitter@VirtueMe

---
= id="session"

# This session
<br>

## Afterwards

* keep files from git
* reset merges gone bad
* flatten out your commit tree

---
= id="attention" 

# Attention

<br>

## You should be

* be careful
* use this at your own risk

## You should

* play with it
* rethink you work strategy

## You will need

* time to understand it
* to work low level

---

## .gitignore

the file to rule them all
<br>
<br>

## Files not to care about

* temp files and folders \(build\)
* user spesfic files

## Format

* simple regex support \[Aa\], \[0-9\]
* does not work on folder level deeps 
* tmp/\*.temp will only work on the top level

---
= id="commands"

## Commands 
<br>


```bash
git commit --amend
git revert
git reset HEAD
git clean
git checkout --
git cherry-pick
git submodule
git subtree
```

---

## Ammending things

You wish to

* add more files,
* undo files added
* change or add more to the message

```bash
git commit -m "My super duper commit"
...

git add myfile.cs
git commit --amend
```

---

## Reverting things

Changes introduced by commit is faulty


```bash

git revert <commit>

```
result

* creates a undo commit
* safe to publish to upstream/remote

---

## Reset

A dangerous method

* files are gone forever

```bash

# kind
git reset 

# byebye
git reset --hard


```
__for local changes only__

---

## Clean

works on the folder structure

* does not apply to commits
* unstaged changes are gone forever

```bash
# dry run
git clean -n

# hard
git clean -f

# recursive

git clean -f -d
```

---
	
## Checkout

* fetching branches/commits

```bash

# checkout all files from that branch
git checkout branch

# fetch file from commit
git checkout commit file

# detached head
git checkout commit
```

---

## cherry-pick

You want to add a commit to a branch

```bash

git checkout branch

git cherry-pick commit

git push upstream branch

```

---

## submodule

When you want to add a repository into your repository

```bash

git submodule add <remote> folder

git add .

git commit -m "message"

git push upstream branch

```

other

```bash

git pull upstream branch

git submodule init

git submodule update

```