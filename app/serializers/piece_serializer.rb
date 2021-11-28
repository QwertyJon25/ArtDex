class PieceSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :style, :desc, :price, :date, :image, :gallery_id, :artist_id
end
