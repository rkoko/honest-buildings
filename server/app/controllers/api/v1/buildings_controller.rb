class Api::V1::BuildingsController < ApplicationController

  def index
    render json: {buildings: Building.all}
  end

  def show
    render json: {building: Building.find(params[:id])}
  end
end
