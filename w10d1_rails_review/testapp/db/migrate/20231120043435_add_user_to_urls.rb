class AddUserToUrls < ActiveRecord::Migration[7.1]
  def change
    add_reference :urls, :user
  end
end
