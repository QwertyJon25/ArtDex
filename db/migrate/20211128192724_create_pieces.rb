class CreatePieces < ActiveRecord::Migration[6.1]
  def change
    create_table :pieces do |t|
      t.string :name
      t.string :type
      t.string :style
      t.string :desc
      t.integer :price
      t.integer :date
      t.string :image
      t.string :gallery_id
      t.string :artist_id

      t.timestamps
    end
  end
end
