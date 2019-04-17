# Amsterdam

The Canvas Design System Library

## Purpose

* To promote consistency throughout design files and codebase
* To build and test ideas faster
* To design in-browser solutions

### Requirements

* [node](https://nodejs.org/en/)
* [brew](https://brew.sh/)
* [git](https://git-scm.com/)

### Deprecation

See [deprecations guide](https://github.com/drivecanvas/amsterdam/blob/master/DEPRECATION.md) when upgrading.

### Installation

Once you have installed `node` and `brew`, install `yarn`

```
brew install yarn
```

Then clone the repository

```
git clone git@github.com:drivecanvas/amsterdam.git
```

Enter the directory and install the dependencies

```
cd amsterdam
yarn
```

Launch the server and start designing~

```
yarn start
```

### Guide

See the online [guide](https://staging-amsterdam.herokuapp.com/). Please make sure that
when you edit rules, you also update the documentation! If you add new things, consider improving
the documentation and adding illustrations to spread the knowledge faster amongts the team.


### Deploying to [staging-amsterdam](https://staging-amsterdam.herokuapp.com/)

After adding the remote

```
git remote add staging-amsterdam https://git.heroku.com/staging-amsterdam.git
```

Run the following command

```
yarn deploy
```
