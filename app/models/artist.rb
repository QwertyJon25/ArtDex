class Artist < ApplicationRecord
    has_secure_password
    validates :user_name, presence: true, uniqueness: true


    has_many :materials
    has_many :pieces
    has_many :galleries, through: :pieces
end
