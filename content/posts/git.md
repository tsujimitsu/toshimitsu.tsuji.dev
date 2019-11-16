---
path: "/blog/git"
date: "2019-07-17"
title: "git"
tags: ["git"]
---

## git

## git-flow

before coding

```
$ git checkout develop
$ git pull origin develop --rebase
$ git checkout -b issue-XXX
```

before push(squash)

```
$ git commit -m 'some comment #<issue number>'
$ git log
$ git rebase -i HEAD~2
```

before push(rebase)

```
$ git status(gs)
$ git pull origin develop --rebase
<Fix merge conflict>
$ git add .
$ git rebase --continue
$ git push origin issue-XXX
```

after push(merged to develop)

```
$ git push origin --delete issue-XXX (Delete remote branch)
$ git branch -D issue-XXX (Delete local branch)
```

- [GitSheet](https://gitsheet.wtf/)
