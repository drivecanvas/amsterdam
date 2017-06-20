# AMSTERDAM

The Canvas Design System Library

## Purpose

* To promote consistency throughout design files and codebase
* To build and test ideas faster
* To design in-browser solutions

### Requirements

* [node](https://nodejs.org/en/)
* [brew](https://brew.sh/)
* [yarn](https://yarnpkg.com/en/)
* [git](https://git-scm.com/)

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

### Deploying to [staging-amsterdam](https://staging-amsterdam.herokuapp.com/)

After adding the remote

```
git remote add staging-amsterdam https://git.heroku.com/staging-amsterdam.git
```

Run the following command

```
yarn deploy
```
