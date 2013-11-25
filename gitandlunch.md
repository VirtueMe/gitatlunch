---
author: Benny Thomas
title: Git at lunch
---
= id="Welcome"

# GIT

## Introduction easy flow

> Benny Thomas @ Sandviks AS

> Github@VirtueMe

> Twitter@VirtueMe

> Using mdpress/impress.js

---
= id="pre" data-x="1000" data-scale="2"

# This session

## Afterwards

_Understand howto_

* Understand repositories in the sense of git.
  * Create new or clone existing
  * Knowledge about origins and upstreams
* Check-in and Check-out changes
* rules for file tracking

---
= id="attention" data-x="2825" data-y="2325" data-z="-3000" data-rotate="300"

# Attention

__You__ will not

* become a git master
* understand the inner working of git

__You__ should

* play with it
* rethink you work strategy

__You__ will

* use time to understand it
* need to work low level

---
= id="setup-git"

## setup git

* install git (git-scm.com)
* install merge tools
* identify yourself

```bash
E:\project> git config --global user.name "Benny Thomas"
E:\project> git config --global user.email "jan.thomas@sandviks.com"
```

## Questions?

__feel free to contact me afterwards for advanced questions__

---
= id="ing" data-rotate-x="90"

## Repositories

#### **What?**

* Stored locally
* Contains
  * Commits
  * Refs to Commits => <b class="positioning">HEADS</b>
* All changes stored in projects root folder
  * hidden <b class="hiddengem"> .git </b> folder
* needs to be intialized or cloned.
* works like a database

---
= id="commands"

## Commands

```bash
git init
git add 
git rm
git reset
git commit

git log 

git branch
git checkout

git merge

git clone

git fetch
git pull
```

---
= id="first-step"

## First step

* lets setup a repository

---
= id="init-with-name" data-z="2000" data-scale="4"

## New fresh repository

```bash

E:\> git init project
Initialized empty Git repository in E:/project/.git/

```
---
= id="init-in-folder" data-z="4000" data-scale="8"

## With options to add files

```bash

E:\> mkdir project
E:\> cd project
E:\project> git init
Initialized empty Git repository in E:/project/.git/

```

---
= id="repository-not-ready"

## status

* empty database
* not usable

```bash

E:\project> git log
fatal: bad default revision 'HEAD'

```

---
= data-z="4000" data-scale="4"

```bash
E:\project> git status
# On branch master
#
# Initial commit
#
nothing to commit (create/copy files and use "git add" to track)

```
---
= id="best-practice"

## Setup first commit

best practice (typical OSS)

* add README
* should describe 
 * project
 * how to setup project environment
* point to other documents worth reading
 * contribution rules (use of git, tools)
 * Coding Standards

---
= id="add-readme" data-z="1000" data-scale="8"

## Add a README

```bash
E:\project> touch README.md

E:\project> git status
# On branch master
#
# Initial commit
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#       README.md
nothing added to commit but untracked files present (use "git add" to track)

```

---

## Track changes

```bash

E:\project> git add README.md
E:\project>

```

---

## What just happened

```bash
E:\project> git status
# On branch master
#
# Initial commit
#
# Changes to be committed:
#   (use "git rm --cached <file>..." to unstage)
#
#       new file:   README.md
#
```

---

## Untrack changes

```bash
E:\project> git rm --cached README.md
rm 'README.md'
```

---

## Back to square 1

```bash
E:\project> git status
# On branch master
#
# Initial commit
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#       README.md
nothing added to commit but untracked files present (use "git add" to track)

```

---

## Lets commit the changes

```bash
E:\project> git add README.md
E:\project> git commit -am "Initial commit"
[master (root-commit) d8b7c85] Initial commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
```
---

## git commit

* -a
 * tell git to stage all files that has been modified or deleted
* -m "message"
 * add message to the commit

---

```bash
E:\project> git log
commit d8b7c8594a2b2da060b2173fa1939d7d3c918bf6
Author: Benny Thomas <jan.thomas@sandviks.com>
Date:   Mon Nov 25 11:00:00 2013 +0100

    Initial commit
```

---

## Add changes to README.md

* Add text
 
```

     Superawesome Project
     
     ====================
     
     A project that will change the world
```
---

## Where are we

```bash
E:\project> git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   README.md
#
no changes added to commit (use "git add" and/or "git commit -a")

```

---

## lets stage changes

```bash
E:\project> git add README.md
E:\project> git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       modified:   README.md
#
```

---

## Did you spot the change

* untracked files 
 * ```git rm --cached filename```
* tracked files
 * ```git reset HEAD filename```


```bash
E:\project> git reset HEAD .\README.md
Unstaged changes after reset:
M       README.md
```

---

## Commit changes

```bash
E:\project> git add README.md
E:\project> git commit -am "Added better project description"
[master 7c83170] Added better project description
 1 file changed, 4 insertions(+)
```

---

## Look at history

```bash
E:\project> git log
commit 7c83170d88d58410cc87081025e0c9f57a309801
Author: Benny Thomas <jan.thomas@sandviks.com>
Date:   Mon Nov 25 11:05:00 2013 +0100

    Added better project description

commit d8b7c8594a2b2da060b2173fa1939d7d3c918bf6
Author: Benny Thomas <jan.thomas@sandviks.com>
Date:   Mon Nov 25 11:00:00 2013 +0100

    Initial commit

```
---

## Feature branch

* pros
 * We want to keep master clean
 * lets us work on multiple feature at the same time
* cons
 * It's not agile
 * can polute the commit chain

---

## branch

* list

```bash
E:\project> git branch
* master
```
* create new

```bash
E:\project> git checkout -b awesomefeature
Switched to a new branch 'awesomefeature'
```

---

## status

```bash
E:\project> git status
# On branch awesomefeature
nothing to commit, working directory clean

```

---

## Change README

* add text

```text
Feature added:

The best ever
```
* commit it

```bash
E:\project> git add README.md
E:\project> git commit -am "Added description for new feature"
[awesomefeature e046e01] Added description for new feature
 1 file changed, 5 insertions(+), 1 deletion(-)

```

---

## historie

```bash
E:\project> git log
commit e046e017b3abdc2dfdeae896d707b7a918854c52
Author: Benny Thomas <jan.thomas@sandviks.com>
Date:   Mon Nov 25 11:10:00 2013 +0100

    Added description for new feature

commit 7c83170d88d58410cc87081025e0c9f57a309801
Author: Benny Thomas <jan.thomas@sandviks.com>
Date:   Mon Nov 25 11:05:00 2013 +0100

    Added better project description

commit d8b7c8594a2b2da060b2173fa1939d7d3c918bf6
...
```
---

## switch back

```bash
E:\project> git checkout master
Switched to branch 'master'
```
* check difference

```bash
E:\project [master]> git log
commit 7c83170d88d58410cc87081025e0c9f57a309801
Author: Benny Thomas <jan.thomas@speilbildet.com>
Date:   Mon Nov 25 11:05:00 2013 +0100

    Added better project description

commit d8b7c8594a2b2da060b2173fa1939d7d3c918bf6
Author: Benny Thomas <jan.thomas@speilbildet.com>
Date:   Mon Nov 25 11:00:00 2013 +0100

    Initial commit
```

---

## Moving

* creating
 * ```git checkout -b 'branch'```
 * creates a new branch from the branch you where in
* moving
 * ```git checkout 'branch'```
 * keeps track of modified files
* delete
 * ```git branch -d 'branch'```
  * deletes the branch, needs to be merged into HEAD or upstream branch

---

## Advanced

* reset
 * ```git checkout -B 'branch'```
 * create a new or rewrites the old from the branch you were in

---

## Merge

* Sync branches

```bash
E:\project> git checkout master
E:\project> git merge awesomefeature
Updating 7c83170..e046e01
Fast-forward
 README.md | 6 +++++-
 1 file changed, 5 insertions(+), 1 deletion(-)
```

---

## Merge pitfalls

* merge can fail
 * changes are detected that are not interchangable
 * needs to be resolved
 * git will remember resolv actions on future conflicts
 * needs to be commited after resolving. **Resolv** it first.
 * git adds markers to files with conflicts
 * needs to ```git add 'filename'``` after resolv
 * needs manual commit afterwards

---

## Resolv conflicts

```bash
E:\project> git mergetool
...

E:\project> git add 'file1' 'file2'
E:\project> git commit -am "Merged in changes that conflicted"

```
---

## clean up feature branches

* keep it clean

```bash

E:\project> git branch -d awesomefeature
Deleted branch awesomefeature (was e046e01).
E:\project>

```
---
= id="remotes"

# Remotes

---
= id="upstreams"

## Work upstream

```bash

E:\> git clone https://github.com/VirtueMe/aura
Cloning into 'aura'...
remote: Counting objects: 3372, done.
remote: Compressing objects: 100% (2066/2066), done.
remote: Total 3372 (delta 1336), reused 3084 (delta 1095)
Receiving objects: 100% (3372/3372), 1.57 MiB | 963.00 KiB/s, done.
Resolving deltas: 100% (1336/1336), done.
Checking connectivity... done
E:\> cd aura
E:\aura> 

```

---

## Keep updated

* fetch - merge

```bash

E:\aura> git fetch origin master
From https://github.com/VirtueMe/aura
 * branch            master     -> FETCH_HEAD
E:\aura> git merge origin/master
Already up-to-date.
E:\aura>

```

* note
 * fetch does not update local branch, just the .git branch

---

## Keep updated (2)

* pull

```bash

E:\aura> git pull origin master
 * branch            master     -> FETCH_HEAD
Already up-to-date.
E:\aura>

```

* note
 * pull will fetch and do a merge or rebase afterwards

---

## Undo merging

```bash

E:\aura> git reset --merge ORIG_HEAD

```
---
= id="the-end"

# Thank you 

# for your

# attention
<br>
# ***
<br>

# **Happy giting**
