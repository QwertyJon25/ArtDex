class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :category, :artist_id, :piece_id
end
