require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base
  enable :sessions

  get "/" do
    headers 'Access-Control-Allow-Origin' => '*'
    data = session[:data]
    content_type :json
    { data: data }.to_json
    # temperature = session[:temperature]
    # city = session[:city]
    # city_temperature = session[:city_temperature]
  end

  get "/temperature" do
    headers 'Access-Control-Allow-Origin' => '*'
    p session
    content_type :json
    { data: session[:data] }.to_json
  #   content_type :json
  #   { temperature: temperature }.to_json
  #   { current_city: city  }.to_json
  #   { current_temperature: city_temperature }.to_json
  end

  post "/temperature" do
    headers 'Access-Control-Allow-Origin' => '*'
    session[:data] = params[:data]
    p session
    # session[:temperature] = params[:temperature]
    # session[:city_temperature] = params[:current_temperature]
    # session[:city] = params[:current_city]
    # 200
    redirect to "/temperature"
  end
  run! if app_file == $0
end
