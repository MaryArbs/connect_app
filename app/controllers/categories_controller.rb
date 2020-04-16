class CategoriesController < ApplicationController
    def index
        # byebug
        @categories = Category.all
        render json: @categories
      end
    
      def create
        @category = Category.create(category_params)
        render json: @category
      end

      def show
        @category = Category.find(params[:id])
        render json: @category
      end
    
      def update
        @category = Category.find_by(id: params[:id])
        @category.update(category_params)
        render json: @category
      end
    
    
      private
      def movie_params
        params.require(:category).permit(:name)
      end 
end
