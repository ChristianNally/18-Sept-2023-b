class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.string :fullname
      t.timestamps
    end
  end
end
