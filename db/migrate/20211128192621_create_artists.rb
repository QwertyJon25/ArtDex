class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :bio
      t.string :contact
      t.string :style
      t.integer :dates
      t.string :image
      t.string :user_name
      t.string :password_digest

      t.timestamps
    end
  end
end
