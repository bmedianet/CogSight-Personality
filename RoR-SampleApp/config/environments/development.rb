BmnPersonalityApiSkeletonRor::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Log error messages when you accidentally call methods on nil.
  config.whiny_nils = true

  # Show full error reports and disable caching
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  # Don't care if the mailer can't send
  config.action_mailer.raise_delivery_errors = false

  # Print deprecation notices to the Rails logger
  config.active_support.deprecation = :log

  # Only use best-standards-support built into browsers
  config.action_dispatch.best_standards_support = :builtin

  # Raise exception on mass assignment protection for Active Record models
  config.active_record.mass_assignment_sanitizer = :strict

  # Log the query plan for queries taking more than this (works
  # with SQLite, MySQL, and PostgreSQL)
  config.active_record.auto_explain_threshold_in_seconds = 0.5

  # Do not compress assets
  config.assets.compress = false

  # Expands the lines which load the assets
  config.assets.debug = true
  config.assets.prefix = "/bmn-personality-api-skeleton-ror/assets"

  # The username and password provided below are for a sample user in the repository created
  #   specifically for this demo. If you wish to, however, create your own user for the database,
  #   you can authorize access to the repository using the following request:
  #     /api/1/createUser.htm
  #     
  #     Parameters:
  #       user - required. Will be the username for your access to the repository.
  #       pswd - required. Your password for accessing the repository.
  #       Response type - HTM formatted string, saying "User created successfully"
  #   
  #     Sample URL:
  #       http://bpc.bmedianet.com/api/1/createUser.htm?user=sampleUser&pswd=samplePassword

  config.sling_server = 'https://bpc.bmedianet.com'
  # config.sling_server = 'http://localhost:8080'
  config.user_name = 'sampleUser'
  config.password = 'samplePassword'
end
