# Git Better

## Mozu Workflow

 - Draw basic release structure
 - Demo 1.19, 1.20, and 2.0 on top of master
 - Demo Hotfixes
 

### Definition of master
Stable, next minor release in line for production

## Basic Terms
 - [Branching][branching]
 - [Rebasing][rebasing]

## When to do things

### When to rebase
 - When in feature branches
 - Single commits on release branches

### When NOT to rebase
 - When merging a release branch into master


## Basic Setup

 - Ensure git CLI is working and added to `PATH`
 - Install [Git windows credential store][credential-store]
 - Install [Sublime Text 3][sublime]
 - Learn about `%UserProfile%\.gitconfig` and [link sample][gitconfig]

## Recommended Tools

 - [ConEmu for Windows][conemu] - Better shell manager
 - [SourceTree for Windows and Mac][sourcetree] - The UI most are using


## Basic Scenario (local only)

in master, create 1.17
-b flag means create new branch

    git checkout -b 1.17

push 1.17 to origin
-u means set up stream
origin is tfs remote

    git push -u 1.17 origin/1.17

create feature branch
create local feature branch/topic branch -- not in remote

    git checkout -b feature_branch


finished feature branch, wants to merge
shouldnt merge! should rebase!

    1. git checkout 1.17
    2. git pull
    3. git checkout feature_branch
    4. git rebase 1.17
    5. git checkout 1.17
    6. git merge --squash feature_branch
    7. git commit -m 'add valuble message and bug/feature number'


### ToDos
 - How to howfix
 - How to create a branch from tag
 - How to reset and fix issues
 - How to show what a commit did (CLI and TFS)




 [branching]: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
 [rebasing]: https://git-scm.com/book/en/v2/Git-Branching-Rebasing
 [credential-store]: https://gitcredentialstore.codeplex.com
 [sourcetree]: https://www.sourcetreeapp.com
 [gitconfig]: http://hastebin.com/raw/nanunalali
 [sublime]: http://www.sublimetext.com/3
 [conemu]: http://conemu.github.io