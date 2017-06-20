# -*- encoding: utf-8 -*-
require File.expand_path('../lib/amsterdam/version', __FILE__)

Gem::Specification.new do |gem|
  gem.name     = 'amsterdam'
  gem.version  = Amsterdam::VERSION
  gem.authors  = ['Alex Bloom']
  gem.email    = 'alex@drivecanvas.com'
  gem.summary  = 'amsterdam is CSS sanctuary of Canvas.'
  gem.homepage = 'https://github.com/drivecanvas/amsterdam'
  gem.license  = 'MIT'

  gem.add_dependency "railties", '>= 5.0'

  gem.files      = `git ls-files -- app/*`.split("\n")
end
