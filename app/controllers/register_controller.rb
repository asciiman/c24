class RegisterController < ApplicationController

  def create
    @operation = Operation.new
    @operation.save
    redirect_to @operation
  end

  def enter_number

  end

end
