class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :contact, :style, :dates, :image, :user_name, :password_digest
end
