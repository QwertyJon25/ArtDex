class PieceSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :style, :desc, :price, :date, :image
  # , :gallery_id, :artist_id
end
