Gem::Specification.new do |s|
  s.name     = 'amsterdam'
  s.version  = '0.0.1d'
  s.authors  = ['Alex Bloom']
  s.email    = 'alex@drivecanvas.com'
  s.summary  = 'amsterdam is CSS sanctuary of Canvas.'
  s.homepage = 'https://github.com/drivecanvas/amsterdam'
  s.license  = 'MIT'

  s.files      = `git ls-files`.split("\n")
  s.test_files = `git ls-files -- test/*`.split("\n")
end
