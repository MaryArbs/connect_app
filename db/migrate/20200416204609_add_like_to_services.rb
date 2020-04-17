class AddLikeToServices < ActiveRecord::Migration[6.0]
  def change
    add_column :services, :likes, :integer, default: 0
  end
  
end
