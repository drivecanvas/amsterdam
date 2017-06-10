lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'amsterdam/version'

Gem::Specification.new do |gem|
  gem.name     = 'amsterdam'
  gem.version  = Amsterdam::VERSION
  gem.authors  = ['Alex Bloom']
  gem.email    = 'alex@drivecanvas.com'
  gem.summary  = 'amsterdam is CSS sanctuary of Canvas.'
  gem.homepage = 'https://github.com/drivecanvas/amsterdam'
  gem.license  = 'MIT'
  gem.files = Dir["{lib,vendor}/**/*"] + ["MIT-LICENSE", "README.md"]

  gem.files      = `git ls-files`.split("\n")
  gem.test_files = `git ls-files -- test/*`.split("\n")
end
