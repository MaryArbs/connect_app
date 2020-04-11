class ServicesController < ApplicationController
    def index
        byebug
        @services = Service.all
        render json: @services
      end
    
      def create
        service = Service.create(service_params)
        render json: service
      end
    
      def destroy
        service = Service.find_by(id: params[:id])
        service.destroy
      end
    
      private
      def service_params
        params.require(:service).permit(:name, :location, :phone_number, :url, :category_id)
      end 
end
