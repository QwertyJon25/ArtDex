class CreateMaterials < ActiveRecord::Migration[6.1]
  def change
    create_table :materials do |t|
      t.string :name
      t.string :desc
      t.string :category
      t.string :artist_id
      t.string :piece_id

      t.timestamps
    end
  end
end
