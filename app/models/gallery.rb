class Gallery < ApplicationRecord
    belongs_to :director
    has_many :pieces
    has_many :artists, through: :pieces
end
