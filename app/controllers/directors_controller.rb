class DirectorsController < ApplicationController
      def index
        directors = Director.all
        render json: directors, status: :ok
    end

    def show
        director = Director.find_by(id: params[:id])
        if director
            render json: director, status: :ok
        else
            render json: { error: "Director not found" }, status: :not_found
        end
    end
end
