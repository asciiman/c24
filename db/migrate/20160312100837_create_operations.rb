class CreateOperations < ActiveRecord::Migration
  def change
    create_table :operations do |t|
      t.float :operands, array: true, default: []
      t.float :result
      t.string :operator

      t.timestamps null: false
    end
  end
end
