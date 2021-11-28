class PiecesController < ApplicationController
        def index
        pieces = Piece.all
        render json: pieces, status: :ok
    end

    def show
        pieces = Piece.find_by(id: params[:id])
        if piece
            render json: piece, status: :ok
        else
            render json: { error: "Piece not found" }, status: :not_found
        end
    end

    def create
        piece = Piece.create(exercise_params)
        if piece
            render json: piece, status: :created
        else
            render json: { errors: "Not Found"}, status: :not_found
    end
end

    def update
        piece = Piece.find_by(id: params[:id])
        if piece
            render json: piece, status: :ok
        else 
            render json: { errors: "Not Found"}, status: :not_found
        end
    end

    def destroy
        piece = Piece.find_by(id: params[:id])
        if piece
            piece.destroy
            head :no_content
        else 
            render json: { error: "Piece not found" }, status: :not_found
        end
    end

    private

    def piece_params
        params.permit(:name, :category, :style, :desc, :price, :date, :image, :gallery_id, :artist_id)

    end
end
