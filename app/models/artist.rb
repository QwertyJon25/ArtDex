class Artist < ApplicationRecord
    has_many :materials
    has_many :pieces
    has_many :galleries, through: :pieces
end
