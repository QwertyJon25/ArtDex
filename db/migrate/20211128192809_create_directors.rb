class CreateDirectors < ActiveRecord::Migration[6.1]
  def change
    create_table :directors do |t|
      t.string :name
      t.string :bio
      t.string :contact
      t.string :image

      t.timestamps
    end
  end
end
