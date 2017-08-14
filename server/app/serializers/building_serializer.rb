class BuildingSerializer < ActiveModel::Serializer
  attributes :id, :street_address, :neighborhood
  belongs_to :building_mgmt
end
