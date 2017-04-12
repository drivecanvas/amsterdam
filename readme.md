# AMSTERDAM

The Canvas Design System Library

## Purpose

* To promote consistency throughout design files and codebase
* To build and test ideas faster
* To design in-browser solutions

## Features

* Jekyll / Liquid Templating (Mimics Handlebars in Live Environment)
* 8px Base Grid / Maths
* Consistent Type Scale / Baseline


## Deploy

* 1. Install Ruby (preferable use Rbenv or RVM):

```
brew install rbenv ruby-build

# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

# Install Ruby
rbenv install 2.4.0
rbenv global 2.4.0
ruby -v
```

* 2. Install bundler:

```
gem install bundler
```

* 3. Install dependencies:

```
bundle install
```

* 4. Add the remote:
```
git remote add staging https://git.heroku.com/amsterdam-staging.git
```

* 5. Then run the following command to deploy:

```
git push staging [your-branch]:master
```

* 6. Complete the readme if anything is missing or unclear



