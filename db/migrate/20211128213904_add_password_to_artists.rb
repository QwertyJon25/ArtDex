class AddPasswordToArtists < ActiveRecord::Migration[6.1]
  def change
    add_column :artists, :password, :string
  end
end
