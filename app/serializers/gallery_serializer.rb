class GallerySerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :contact, :location, :director_id
end
