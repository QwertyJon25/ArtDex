class CreateGalleries < ActiveRecord::Migration[6.1]
  def change
    create_table :galleries do |t|
      t.string :name
      t.string :desc
      t.string :contact
      t.string :location
      t.string :director_id

      t.timestamps
    end
  end
end
