class Piece < ApplicationRecord
    has_many :materials
    belongs_to :artist, optional: true
    belongs_to :gallery, optional: true
end
