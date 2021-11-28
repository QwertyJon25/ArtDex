class Director < ApplicationRecord
    has_many :galleries
    has_many :pieces, through: :galleries
    has_many :artists, through: :pieces
end
