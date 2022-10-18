# README
This is an embedded Shopify App that enables transfer of a product from one store to another store.
The application will be installed to two stores (Store A and B). After installation, the application will show a simple select prompting to choose a store. In this case, if the application is installed in both Stores A and B and it is currently open in Store A, the select prompt will show Store B. After selecting Store B, the application will display a list of products of Store A. The selected product will then be copied into Store B.

This was done by:

● Creating a new Rails application.

● Installing and configuring the Shopify App gem into the application.

● Creating a Public app on the Shopify Partners Dashboard, and adding the API keys from this app into the rails application.

● The application will use Shopify App Bridge’s Product Resource Picker to display the list of products.

● Transference of the products into the selected store will be done background job.

The gems used in the app are:
ruby '3.0.2'

gem 'rails', '~> 6.1.7'

gem 'sqlite3', '~> 1.4'

gem 'puma', '~> 5.0'

gem 'sass-rails', '>= 6'

gem 'webpacker', '~> 5.0'

gem 'turbolinks', '~> 5'

gem 'jbuilder', '~> 2.7'

gem 'redis', '~> 4.0'

gem 'bcrypt', '~> 3.1.7'

gem 'image_processing', '~> 1.2'

gem 'bootsnap', '>= 1.4.4', require: false

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 4.1.0'
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen', '~> 3.3'
  gem 'spring'
end

group :test do
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver', '>= 4.0.0.rc1'
  gem 'webdrivers'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "shopify_app", "~> 21.0"
gem 'polaris', '~> 1.1', '>= 1.1.2'
