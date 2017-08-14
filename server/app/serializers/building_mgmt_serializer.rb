class BuildingMgmtSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :buildings
end
