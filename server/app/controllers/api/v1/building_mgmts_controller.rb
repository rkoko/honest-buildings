class Api::V1::BuildingMgmtsController < ApplicationController
  def index
    render json: { building_mgmts: BuildingMgmt.all }
  end

  def create
    mgmt = BuildingMgmt.new(mgmt_params)
    mgmt.save
    if mgmt.save
      render json: { name: mgmt.name, status: 200 }
    else
      render json: { errors: mgmt.errors.full_messages }
  end
end

  def show
    render json: { building_mgmt: BuildingMgmt.find(params[:id]) }
  end

  def find_mgmt
    BuildingMgmt.find_by(mgmtname: params[:mgmtname])
  end

  private

  def mgmt_params
    params.require(:building_mgmt).permit(:name)
  end
end
