class PlantSerializer < ActiveModel::Serializer
    attributes :id, :hybridizer, :description, :color_id, :color
end