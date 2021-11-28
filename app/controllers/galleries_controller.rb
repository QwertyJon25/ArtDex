class GalleriesController < ApplicationController
      def index
        galleries = Gallery.all
        render json: galleries, status: :ok
    end

    def show
        gallery = Gallery.find_by(id: params[:id])
        if gallery
            render json: gallery, status: :ok
        else
            render json: { error: "Gallery not found" }, status: :not_found
        end
    end
end
