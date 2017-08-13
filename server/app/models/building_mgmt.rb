class BuildingMgmt < ApplicationRecord
  has_many :reviews
  has_many :buildings
end
