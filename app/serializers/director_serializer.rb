class DirectorSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :contact, :image
end
