class Api::V1::ReviewsController < ApplicationController


  def index
    render json: Review.all
  end

  def show
    render json: Review.find(params[:id])
  end

  def create
    review = Review.new(review_params)
    review.save
    render json: {review: review}
  end

  def listing_params
    params.require(:review).permit(:)

end
