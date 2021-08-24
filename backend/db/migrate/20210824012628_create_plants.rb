class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :hybridizer
      t.string :description
      t.integer :color_id

      t.timestamps
    end
  end
end
