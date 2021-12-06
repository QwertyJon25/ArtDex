class ArtistsController < ApplicationController
      def index
        artists = Artist.all
        render json: artists, status: :ok
    end

    def show
        artist = Artist.find_by(id: params[:id])
        # artist = Artist.find_by(id: session[:user_id])
        if artist
            render json: artist, status: :ok
        else
            render json: { error: "Artist not found" }, status: :not_found
        end
    end

#       def create
#     artist = Artist.create(user_params)
#     if user.valid?
#       session[:user_id] = user.id
#       render json: user, status: :ok
#     else
#       render json: { error: user.errors }, status: :unprocessable_entity
#     end
#   end

#   private

#   def user_params
#     params.permit(:user_name, :password, :password_confirmation)
#   end

end
