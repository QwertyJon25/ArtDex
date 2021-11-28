class MaterialsController < ApplicationController
      def index
        materials = Material.all
        render json: materials, status: :ok
    end

    def show
        material = Material.find_by(id: params[:id])
        if material
            render json: material, status: :ok
        else
            render json: { error: "Material not found" }, status: :not_found
        end
    end
end
