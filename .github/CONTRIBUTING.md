# GUIDELINES FOR CONTRIBUTING 🤝😎💪

![Hello Gif](https://i.imgur.com/AykhEBG.gif)

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.


## References 🧾✨

Refer to the following articles on the basics of Git and Github and can also contact the Project Mentors, in case you are stuck:

- [Getting started with Git and GitHub](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github)
- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)


## How to Contribute💥:

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)

- Take a look at the Existing [Issues](https://github.com/Feminine-Divine/periodo/issues) or create your own Issues!
- Wait for the Issue to be assigned to you after which you can start working on it.
- Fork the Repo and create a Branch for any Issue that you are working upon.
- Create a Pull Request which will be promptly reviewed and suggestions would be added to improve it.
- Add Screenshots to help us know what this Script is all about.


## HOW TO REBASE A BRANCH💥:

**1.** [Fork](https://github.com/Feminine-Divine/periodo.git) the project.

**2.** Clone the forked repository. Open git bash and type:

```bash
git clone https://github.com/<your-github-username>/periodo.git
```

**3.** Navigate to the project directory.

```bash
cd periodo
```

**4.** Add upstream.

```bash
git remote add upstream https://github.com/Feminine-Divine/periodo
```

**5.** Check if the upstream is added or not.

```bash
git remote -v
```

**6.** If you cloned a while ago, get the latest changes from upstream.

```bash
git checkout <master>
git pull upstream <master>
```

**7.** Make a feature branch(Always check your current branch is up to date before creating a new branch from it to avoid merge conflicts)

```bash
git checkout -b <branch-name>
```

**8.** Locally merge (or rebase) the upstream master branch into your topic branch:

```bash
git pull [--rebase] upstream <master>
```

**9.** Push your local commits to the remote repo.

```bash
git push origin <branch-name>
```

**10.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) !


## HOW TO MAKE A PULL REQUEST✨:

**1.** Fork [this](https://github.com/Feminine-Divine/periodo.git) repository.
    Click on the <img src="https://img.icons8.com/ios/24/000000/code-fork.png"> symbol at the top right corner.

**2.** Clone the forked repository. Open terminal and type:

```bash
git clone https://github.com/<your-github-username>/periodo.git
```

**3.** Navigate to the project directory.

```bash
cd periodo
```

**4.** Make a feature branch
```bash
git checkout -b <branch-name>

```
Branch should be named as: `<github-username>/issueNumber/issueDescription`
Example: `k-kumar01/i215/contributing-guidelines`

**5.** Make changes in source code/ project.

**6.** Stage your changes and commit

```bash
#Add changes to Index
git add .

#Commit to the local repo
git commit --signoff -m "<your_commit_message>"
```
Please ensure that the commit messages follow [these conventions](#commit-conventions)

**7.** Push your local commits to the remote repo.

```bash
git push origin <branch-name>
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) !

**9.** **Congratulations!** Sit and relax, you've made your contribution to [Periodo](https://github.com/Feminine-Divine/periodo.git) project.


***:trophy: After this, project admins and mentors will review the changes and will merge your PR if they are found good, otherwise we will suggest the required changes.:trophy:***


### Commit Conventions
Each commit message must adhere to the following format:
```
<type>(scope): <description> - <issue number>

[optional body]
```
This improves the readability of the messages

#### Type
It can be one of the following:
1. **feat**: Addition of a new feature
2. **fix**: Bug fix
3. **docs**: Documentation Changes
4. **style**: Changes to styling
5. **refactor**: Refactoring of code
6. **perf**: Code that affects performance
7. **test**: Updating or improving the current tests
8. **build**: Changes to Build process
9. **revert**: Reverting to a previous commit 
10. **chore** : updating grunt tasks etc

If there is a breaking change in your Pull Request, please add `BREAKING CHANGE` in the optional body section

#### Scope
The file or folder where the changes are made. If there are more than one, you can mention any

#### Description
A short description of the issue

#### Issue number
The issue fixed by this Pull Request.

The body is optional. It may contain short description of changes made.

Following all the guidelines an ideal commit will look like:
```
    git commit --signoff -m "docs: Contributing guidelines - #215"
```
