class SessionsController < ApplicationController
  
  skip_before_action :confirm_authentication

  def create
    artist = Artist.find_by_user_name(params[:user_name])
    if artist&.authenticate(params[:password])
      session[:user_id] = artist.id
      render json: artist, status: :ok
    else
      render json: { error: 'invalid credentials' }, status: :unauthorized
    end
  end

 
  def destroy
    session.delete(:user_id)
  end
  
end