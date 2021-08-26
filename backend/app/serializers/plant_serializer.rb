class PlantSerializer < ActiveModel::Serializer
    attributes :id, :name, :img_url, :hybridizer, :description, :color_id, :color
end