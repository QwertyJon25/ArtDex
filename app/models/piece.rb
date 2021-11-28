class Piece < ApplicationRecord
    has_many :materials
    belongs_to :artist
    belongs_to :gallery, optional: true
end
