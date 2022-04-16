# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-sharp-styleguide"
  spec.version       = "0.1.3"
  spec.authors       = ["eriktailor"]
  spec.email         = ["erno22szabo@gmail.com"]

  spec.summary       = "A fresh, lightweight custom built styleguide template to use with Jekyll sites."
  spec.homepage      = "https://eriktailor.github.io/jekyll-sharp-styleguide"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency 'jekyll-autoprefixer', '1.0.1'
  spec.add_runtime_dependency 'jekyll-minifier'
  spec.add_runtime_dependency 'kramdown'
  spec.add_runtime_dependency 'rouge'
  spec.add_runtime_dependency 'webrick'
  spec.add_runtime_dependency 'execjs', '~> 2.7.0'
  
end
