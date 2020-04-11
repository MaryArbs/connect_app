class CreateServices < ActiveRecord::Migration[6.0]
  def change
    create_table :services do |t|
      t.string :name
      t.string :location
      t.string :phone_number
      t.string :url
      t.integer :category_id

      t.timestamps
    end
  end
end
