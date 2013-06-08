require "net/https"
require "uri"

class HomeController < ApplicationController
  before_filter :http_setup_sling
  def index
  end

  def all_authors


  end

  def authors_by_personality

  end

  def author

  end

  def remove_author

  end

  # NOTE FOR ALL CALLS - HTTP Basic Authentication is required for all calls

  # Makes a call to Personality API -> add_authors, adding authors and their 
  #   personality predictions to your repository of information.
  # Call Type: POST
  # Response format: JSON
  def add_authors
    text = params[:text]
    puts "str:#{text}"
    request = Net::HTTP::Post.new("/personality-api/1/add_authors.json")
    request.basic_auth BmnPersonalityApiSkeletonRor::Application.config.user_name, BmnPersonalityApiSkeletonRor::Application.config.password
    request.set_form_data({ :text => text
                          })
    logger.debug("request #{request}");
    response = @http.request(request)
    render :text => response.body

  end

  # Makes a call to Personality API -> author. Retrieves personality predictions
  #   for an author provided by the request parameter
  # Call Type: GET
  # Response format: JSON
  def get_author
    id = params[:ID]
    puts "ID:#{id}"
    request = Net::HTTP::Get.new("/personality-api/1/author.json?ID=#{id}")
    request.basic_auth BmnPersonalityApiSkeletonRor::Application.config.user_name, BmnPersonalityApiSkeletonRor::Application.config.password
    response = @http.request(request)
    render :text => response.body

  end

  # Makes a call to Personality API -> authors_by_personality. Retrieves personality 
  #   predictions for authors based on a model of personality provided by the user.
  # Call Type: GET
  # Response format: JSON
  def get_authors_by_personality
      count = params[:count] # Optional - and must be an integer. Cuts the amount of authors return down to the number specified.
      timeline = params[:timeline] # Optional - and must be boolean. Determines whether to return personality predictions by day, month, and year.
      traits = params[:traits]
      e = params[:E] # Optional - and must be y, n or o. Extraversion personality trait. 
      s = params[:S] # Optional - and must be y, n or o. Emotional Stability personality trait. 
      a = params[:A] # Optional - and must be y, n or o. Agreeableness personality trait. 
      c = params[:C] # Optional - and must be y, n or o. Conscientiousness personality trait. 
      o = params[:O] # Optional - and must be y, n or o. Openness personality trait. 
      puts "count:#{count}"
      puts "timeline:#{timeline}"
      puts "e:#{e}"
      puts "s:#{s}"
      puts "a:#{a}"
      puts "c:#{c}"
      puts "o:#{o}"

      request = Net::HTTP::Get.new("/personality-api/1/authors_by_personality.json?count=#{count}&timeline=#{timeline}&Extraversion=#{e}&EmotionalStability=#{s}&Agreeableness=#{a}&Conscientiousness=#{c}&Openness=#{o}")
      request.basic_auth BmnPersonalityApiSkeletonRor::Application.config.user_name, BmnPersonalityApiSkeletonRor::Application.config.password
      response = @http.request(request)
      render :text => response.body

  end

  # Makes a call to Personality API -> all_authors. Retrieves personaltiy predictions
  #   for all authors.
  # Call Type: GET
  # Response format: JSON
  def get_all_authors
      count = params[:count] # Optional - and must be an integer. Cuts the amount of authors return down to the number specified.
      timeline = params[:timeline] # Optional - and must be boolean. Determines whether to return personality predictions by day, month, and year.
      traits = params[:traits] # Optional - value must be a substring of "ESACO". Determines which traits to return.
      puts "count:#{count}"
      puts "timeline:#{timeline}"
      puts "traits:#{traits}"

      request = Net::HTTP::Get.new("/personality-api/1/all_authors.json?count=#{count}&timeline=#{timeline}&traits=#{traits}")
      request.basic_auth BmnPersonalityApiSkeletonRor::Application.config.user_name, BmnPersonalityApiSkeletonRor::Application.config.password
      response = @http.request(request)
      render :text => response.body

  end

  # Makes a call to Personality API -> remove_author. Removes an author from your
  #   repository.
  # Call Type: GET
  # Response format: JSON
  def delete_author
      id = params[:ID]
      puts "id:#{id}"
      request = Net::HTTP::Post.new("/personality-api/1/remove_author.json")
      request.basic_auth BmnPersonalityApiSkeletonRor::Application.config.user_name, BmnPersonalityApiSkeletonRor::Application.config.password
      request.set_form_data({ :ID => id
                            })
      logger.debug("request #{request}");
      response = @http.request(request)
      render :text => response.body

    end


  private

  def http_setup_sling
    server = BmnPersonalityApiSkeletonRor::Application.config.sling_server
    uri = URI.parse(server)
    # @http = Net::HTTP.new(uri.host, uri.port)
    @http = Net::HTTP.new(uri.host, uri.port)
    @http.use_ssl = true
    @http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  end
end

