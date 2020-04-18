class ServicesController < ApplicationController
    def index
        # byebug
        @services = Service.all.order(name: :asc)
        render json: @services
      end
    
      def show
        @service = Service.find(params[:id])
        render json: @service
      end

      def create
        @service = Service.create(service_params)
        render json: @service
      end
    
      def update
        # byebug
        @service = Service.find_by(id: params[:id])
        @service.update(service_params)
        render json: @service 
      end
    
      private
      def service_params
        params.require(:service).permit(:name, :location, :phone_number, :url, :category_id, :likes)
      end 
end
