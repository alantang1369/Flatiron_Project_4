class AddImgUrlToPlants < ActiveRecord::Migration[6.1]
  def change
    add_column :plants, :img_url, :string
  end
end
